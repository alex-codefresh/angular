import "tslib";

import "@angular/core";

import "rxjs";

import "@angular/platform-browser";

var noop = function() {};

var w = "object" == typeof window ? window : noop;

var FormData = w["FormData"] || noop;

var Blob$1 = w["Blob"] || noop;

var ArrayBuffer$1 = w["ArrayBuffer"] || noop;
