"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
class UtilityService {
    constructor() {
        this.postRequest = function (endPoint, method, headers, apiData) {
            return new Promise(function (resolve, reject) {
                var options = {
                    url: endPoint,
                    method: method,
                    headers: headers
                };
                var data;
                try {
                    switch (method.toLowerCase()) {
                        case "get":
                            options.qs = apiData;
                            break;
                        case "post":
                            switch (headers["Content-Type"]) {
                                case "application/json":
                                    options.body = apiData;
                                    break;
                                default:
                                    data = new URLSearchParams();
                                    for (var i in apiData) {
                                        data.append(i, apiData);
                                    }
                                    options.body = data;
                                    break;
                            }
                            break;
                    }
                    (0, request_1.default)(options, function (error, responseData) {
                        if (responseData !== undefined && responseData !== null && responseData.statusCode === 200) {
                            resolve(responseData);
                        }
                        else {
                            resolve(undefined);
                        }
                    });
                }
                catch (ex) {
                    resolve(undefined);
                }
            });
        };
    }
}
var utility = new UtilityService();
exports.default = utility;
