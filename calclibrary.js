"use strict";

function sum(a, b) {
  // if (a && b) return a + b; Does NOT work with ZEROS
  if (arguments.length < 2) throw new Error("parameter missing");
  if ((typeof a !== "number") | (typeof b !== "number"))
    throw new Error("only numbers allowed");
  return a + b;
}

module.exports = { sum };
