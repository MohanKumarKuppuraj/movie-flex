import express,{Express,Request,Response} from "express";
import path from "path";
import dotEnv from "dotenv";
import apis from "./apis/apis";
dotEnv.config();

var application:Express =  express();
application.use(express.urlencoded({limit: '100mb',extended: true}));
application.use(express.static(path.resolve("./src/static")));
application.use(express.json());

application.get("/",function(req:Request,res:Response){
	res.send(path.resolve("./src/static/index.html"));
});

apis.initializeApis(application,process);

application.listen(80,()=>{
	console.log("MMT Flix started to run on the port 80");
});