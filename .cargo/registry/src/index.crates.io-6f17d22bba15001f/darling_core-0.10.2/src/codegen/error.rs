use proc_macro2::TokenStream;
use quote::{TokenStreamExt, ToTokens};

/// Declares the local variable into which errors will be accumulated.
#[derive(Default)]
pub struct ErrorDeclaration {
    __hidden: (),
}

impl ToTokens for ErrorDeclaration {
    fn to_tokens(&self, tokens: &mut TokenStream) {
        tokens.append_all(quote! {
            let mut __errors = ::darling::export::Vec::new();
        })
    }
}

/// Returns early if attribute or body parsing has caused any errors.
#[derive(Default)]
pub struct ErrorCheck<'a> {
    location: Option<&'a str>,
    __hidden: (),
}

impl<'a> ErrorCheck<'a> {
    pub fn with_location(location: &'a str) -> Self {
        ErrorCheck {
            location: Some(location),
            __hidden: (),
        }
    }
}

impl<'a> ToTokens for ErrorCheck<'a> {
    fn to_tokens(&self, tokens: &mut TokenStream) {
        let at_call = if let Some(ref s) = self.location {
            quote!(.at(#s))
        } else {
            quote!()
        };

        tokens.append_all(quote! {
            if !__errors.is_empty() {
                return ::darling::export::Err(::darling::Error::multiple(__errors) #at_call);
            }
        })
    }
}
