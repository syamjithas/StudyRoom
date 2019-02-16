"use strict";

import nexmo from "./index";
import fs from "fs";
import querystring from "querystring";

class Redact {
  static get PATH() {
    return "/v1/redact";
  }

  constructor(credentials, options) {
    this.creds = credentials;
    this.options = options;

    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;

    this._nexmo.initialize(
      this.creds.apiKey,
      this.creds.apiSecret,
      this.options
    );
  }

  transaction(id, product, opts, callback) {
    if (typeof callback === "undefined" && typeof opts === "function") {
      callback = opts;
      opts = {};
    }

    opts = opts || {};

    return this.options.api.postJson(
      `${Redact.PATH}/transaction`,
      { id, product, ...opts },
      function(err, response, body) {
        if (err) {
          return callback(err);
        }

        return callback(null, body);
      }
    );
  }
}

export default Redact;
