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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MovieDetails_1 = __importDefault(require("./../models/api-response-model/MovieDetails"));
const MovieSearchResults_1 = __importDefault(require("./../models/api-response-model/MovieSearchResults"));
const utility_service_1 = __importDefault(require("./utility.service"));
class APIS {
    constructor() {
        this.initializeApis = function (application, process) {
            application.post("/get-search-details", function (req, res) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        var movieSearchRequest = req.body;
                        var apiKey = process.env.APIKEY;
                        var apiEndPoint = process.env.ENDPOINT;
                        var response = yield utility_service_1.default.postRequest(apiEndPoint, "get", {}, { "s": movieSearchRequest.searchKey, "apikey": apiKey, "page": movieSearchRequest.page });
                        var movieSearchResults = response.body;
                        res.send(movieSearchResults);
                    }
                    catch (ex) {
                        console.log(ex);
                        res.send(new MovieSearchResults_1.default());
                    }
                });
            });
            application.post("/get-movie-details", function (req, res) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        var movieDetailsRequest = req.body;
                        var apiKey = process.env.APIKEY;
                        var apiEndPoint = process.env.ENDPOINT;
                        var response = yield utility_service_1.default.postRequest(apiEndPoint, "get", {}, { "i": movieDetailsRequest.id, "apikey": apiKey });
                        var movieDetails = response.body;
                        res.send(movieDetails);
                    }
                    catch (ex) {
                        console.log(ex);
                        res.send(new MovieDetails_1.default());
                    }
                });
            });
        };
    }
}
var apis = new APIS();
exports.default = apis;
