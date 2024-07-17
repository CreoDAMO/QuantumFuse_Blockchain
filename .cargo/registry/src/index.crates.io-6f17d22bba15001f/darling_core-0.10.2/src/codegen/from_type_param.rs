use proc_macro2::TokenStream;
use quote::ToTokens;
use syn::{self, Ident};

use codegen::{ExtractAttribute, OuterFromImpl, TraitImpl};
use options::ForwardAttrs;
use util::PathList;

pub struct FromTypeParamImpl<'a> {
    pub base: TraitImpl<'a>,
    pub ident: Option<&'a Ident>,
    pub attrs: Option<&'a Ident>,
    pub bounds: Option<&'a Ident>,
    pub default: Option<&'a Ident>,
    pub attr_names: &'a PathList,
    pub forward_attrs: Option<&'a ForwardAttrs>,
    pub from_ident: bool,
}

impl<'a> ToTokens for FromTypeParamImpl<'a> {
    fn to_tokens(&self, tokens: &mut TokenStream) {
        let input = self.param_name();

        let error_declaration = self.base.declare_errors();
        let grab_attrs = self.extractor();
        let require_fields = self.base.require_fields();
        let error_check = self.base.check_errors();

        let default = if self.from_ident {
            quote!(let __default: Self = ::darling::export::From::from(#input.ident.clone());)
        } else {
            self.base.fallback_decl()
        };

        let passed_ident = self.ident
            .as_ref()
            .map(|i| quote!(#i: #input.ident.clone(),));
        let passed_attrs = self.attrs.as_ref().map(|i| quote!(#i: __fwd_attrs,));
        let passed_bounds = self.bounds
            .as_ref()
            .map(|i| quote!(#i: #input.bounds.clone().into_iter().collect::<Vec<_>>(),));
        let passed_default = self.default
            .as_ref()
            .map(|i| quote!(#i: #input.default.clone(),));
        let initializers = self.base.initializers();

        let map = self.base.map_fn();

        self.wrap(
            quote! {
                fn from_type_param(#input: &::syn::TypeParam) -> ::darling::Result<Self> {
                    #error_declaration

                    #grab_attrs

                    #require_fields

                    #error_check

                    #default

                    ::darling::export::Ok(Self {
                        #passed_ident
                        #passed_bounds
                        #passed_default
                        #passed_attrs
                        #initializers
                    }) #map
                }
            },
            tokens,
        );
    }
}

impl<'a> ExtractAttribute for FromTypeParamImpl<'a> {
    fn attr_names(&self) -> &PathList {
        &self.attr_names
    }

    fn forwarded_attrs(&self) -> Option<&ForwardAttrs> {
        self.forward_attrs
    }

    fn param_name(&self) -> TokenStream {
        quote!(__type_param)
    }

    fn core_loop(&self) -> TokenStream {
        self.base.core_loop()
    }

    fn local_declarations(&self) -> TokenStream {
        self.base.local_declarations()
    }

    fn immutable_declarations(&self) -> TokenStream {
        self.base.immutable_declarations()
    }
}

impl<'a> OuterFromImpl<'a> for FromTypeParamImpl<'a> {
    fn trait_path(&self) -> syn::Path {
        path!(::darling::FromTypeParam)
    }

    fn trait_bound(&self) -> syn::Path {
        path!(::darling::FromMeta)
    }

    fn base(&'a self) -> &'a TraitImpl<'a> {
        &self.base
    }
}
