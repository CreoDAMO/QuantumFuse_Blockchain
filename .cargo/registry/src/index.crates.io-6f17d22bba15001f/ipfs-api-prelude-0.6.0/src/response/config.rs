// Copyright 2017 rust-ipfs-api Developers
//
// Licensed under the Apache License, Version 2.0, <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.
//

use crate::serde::Deserialize;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "PascalCase")]
pub struct ConfigResponse {
    pub key: String,

    pub value: serde_json::value::Value,
}

pub type ConfigEditResponse = ();

pub type ConfigReplaceResponse = ();

pub type ConfigShowResponse = String;
