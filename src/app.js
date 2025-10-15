"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var helmet_1 = require("helmet");
var morgan_1 = require("morgan");
var dotenv = require("dotenv");
dotenv.config();
var app = (0, express_1.default)(); // create express app
app.use((0, helmet_1.default)()); // security middleware
app.use((0, morgan_1.default)('tiny')); // logging middleware
app.use(express_1.default.json()); // body parser middleware
app.get('/health', function (req, res) {
    res.status(200).send('OK');
});
app.get('/', function (req, res) {
    res.send('Hello, TypeScript WebAPI!');
});
exports.default = app;
