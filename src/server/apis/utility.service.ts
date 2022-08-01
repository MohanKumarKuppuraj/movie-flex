import request from "request";

class UtilityService{

	postRequest = function(endPoint:string,method:string,headers:any,apiData:object){
		return new Promise(function(resolve,reject){
		var options:any = {
			url:endPoint,
			method:method,
			headers:headers
		}
		var data:any;
		try{
		switch(method.toLowerCase()){
			case "get":
				options.qs = apiData;
				break;
			case "post":
				switch(headers["Content-Type"]){
					case "application/json":
					options.body = apiData;
					break;
					default:
					data = new URLSearchParams();
						for(var i in apiData){
							data.append(i,apiData);
						}
					options.body = data;
					break;
				}
			break;
		}
		
		request(options,function(error:any,responseData:any){
			if(responseData!==undefined && responseData!== null && responseData.statusCode === 200){
				resolve(responseData);
			}else{
				resolve(undefined);
			}
		});	

		}catch(ex){
			resolve(undefined);
		}

		});
	}
}

var utility = new UtilityService();

export default utility;