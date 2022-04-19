"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var node_fetch_1 = require("node-fetch");
var cors = require("cors");
var parser = require("body-parser");
var app = express();
var corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};
var port = process.env.PORT || 8080;
app.use(cors(corsOptions));
app.use(parser.json());
app.use(express.json());
app.use(parser.urlencoded({ extended: true }));
app.get('/:page', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, pageStart, pageEnd, page;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, node_fetch_1.default)("https://static.ui.com/fingerprint/ui/public.json")];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                result = _a.sent();
                pageStart = Number(req.params.page) > 0 ? (15 * Number(req.params.page) + 1) : 0;
                pageEnd = Number(req.params.page) > 0 ? (15 * Number(req.params.page) + 16) : 15;
                page = {};
                page.amount = result.devices.length;
                page.devices = result.devices.slice(pageStart, pageEnd);
                res.json(page);
                return [2 /*return*/];
        }
    });
}); });
app.get('/id/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, device;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, node_fetch_1.default)("https://static.ui.com/fingerprint/ui/public.json")];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                result = _a.sent();
                device = result.devices.filter(function (device) { return device.icon.id === req.params.id; });
                res.json(device[0]);
                return [2 /*return*/];
        }
    });
}); });
app.get('/:page/:line', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, pageStart, pageEnd, page, searchQuery, filteredResult, searchResults;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, node_fetch_1.default)("https://static.ui.com/fingerprint/ui/public.json")];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                result = _a.sent();
                pageStart = Number(req.params.page) > 0 ? (15 * Number(req.params.page) + 1) : 0;
                pageEnd = Number(req.params.page) > 0 ? (15 * Number(req.params.page) + 16) : 15;
                page = {};
                searchQuery = req.query.search;
                filteredResult = result.devices.filter(function (device) { return device.line.id === req.params.line || req.params.line === 'all'; });
                searchResults = filteredResult.filter(function (device) { return device.product.name.toUpperCase().includes(searchQuery.toUpperCase()); });
                page.amount = searchResults.length;
                page.devices = searchResults.slice(pageStart, pageEnd);
                res.json(page);
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    console.log('The application is running!');
});
//# sourceMappingURL=app.js.map