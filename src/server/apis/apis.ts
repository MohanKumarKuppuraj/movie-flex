import MovieBasicDetails from "./../models/api-response-model/MovieBasicDetails";
import MovieDetails from "./../models/api-response-model/MovieDetails";
import MovieSearchResults from "./../models/api-response-model/MovieSearchResults";
import MovieDetailsRequest from "./../models/api-request-model/MovieDetailsRequest";
import MovieSearchRequest from "./../models/api-request-model/MovieSearchRequest";
import {Express,Request,Response} from "express";
import utility from "./utility.service";

class APIS{

	initializeApis = function(application:Express,process:any){
		application.post("/get-search-details",async function(req:Request,res:Response){
			try{
			var movieSearchRequest:MovieSearchRequest = req.body;
			var apiKey:string = process.env.APIKEY;
			var apiEndPoint:string = process.env.ENDPOINT; 
			var response:any = await utility.postRequest(apiEndPoint,"get",
				{},{"s":movieSearchRequest.searchKey,"apikey":apiKey,"page":movieSearchRequest.page});
			var movieSearchResults:MovieSearchResults =  response.body;		
			res.send(movieSearchResults);
			}catch(ex){
				console.log(ex);
				res.send(new MovieSearchResults());
			}
		});

		application.post("/get-movie-details",async function(req:Request,res:Response){
			try{
			var movieDetailsRequest:MovieDetailsRequest = req.body;
			var apiKey:string = process.env.APIKEY;
			var apiEndPoint:string = process.env.ENDPOINT;
			var response:any = await utility.postRequest(apiEndPoint,"get",
				{},{"i":movieDetailsRequest.id,"apikey":apiKey});

			var movieDetails:MovieDetails =  response.body;		
			res.send(movieDetails);
			}
			catch(ex){
				console.log(ex);
				res.send(new MovieDetails())
			}
		});
	}
}

var apis = new APIS();
export default apis;