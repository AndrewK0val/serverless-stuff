"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// asset-input/lambdas/simple.ts
var simple_exports = {};
__export(simple_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(simple_exports);
var handler = async (event, context) => {
  try {
    console.log("I was invoked");
    return {
      statusCode: 200,
      headers: {
        "content-type": "applications/json"
      },
      body: { message: "This is a msg returned by a lambda func" }
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      Headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ error })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
