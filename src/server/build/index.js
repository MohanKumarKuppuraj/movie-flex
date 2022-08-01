"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const apis_1 = __importDefault(require("./apis/apis"));
dotenv_1.default.config();
var application = (0, express_1.default)();
application.use(express_1.default.urlencoded({ limit: '100mb', extended: true }));
application.use(express_1.default.static(path_1.default.resolve("./src/static")));
application.use(express_1.default.json());
application.get("/", function (req, res) {
    res.send(path_1.default.resolve("./src/static/index.html"));
});
apis_1.default.initializeApis(application, process);
application.listen(80, () => {
    console.log("MMT Flix started to run on the port 80");
});
