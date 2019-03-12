import "@angular/core";

import "rxjs";

import "@angular/platform-browser";

const noop = function() {};

const w = "object" == typeof window ? window : noop;

const FormData = w["FormData"] || noop;

const Blob$1 = w["Blob"] || noop;

const ArrayBuffer$1 = w["ArrayBuffer"] || noop;
