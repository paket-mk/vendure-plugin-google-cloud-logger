"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVIDE_OPTIONS = exports.asyncLocalStorage = void 0;
const async_hooks_1 = require("async_hooks");
exports.asyncLocalStorage = new async_hooks_1.AsyncLocalStorage();
exports.PROVIDE_OPTIONS = Symbol("options");
