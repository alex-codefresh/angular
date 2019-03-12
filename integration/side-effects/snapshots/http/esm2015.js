import "@angular/core";

import "rxjs";

import "@angular/platform-browser";

const noop = function() {};

const w = "object" == typeof window ? window : noop;

const FormData = w["FormData"] || noop;

const Blob = w["Blob"] || noop;

const ArrayBuffer = w["ArrayBuffer"] || noop;
