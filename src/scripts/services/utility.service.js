class UtilityService {
  postHttpRequest = async function(endPoint, method, headers, data, dispatchInfo) {
    try {
      const options = {
        method: method,
        headers: headers,
      };
		   switch (method.toLowerCase()) {
		   		case 'get':
		   		option.qs = data;
		   		break;
		   		case 'post':
		   			switch (headers['Content-Type'].toLowerCase()) {
		   				case 'application/json':
		   					options.body = JSON.stringify(data);
		   				break;
		   				default:
		   					var formData = new URLSearchParams();
		   					for (const i in data) {
		   						formData.append(i, data[i]);
		   					}
		   					options.body = formData;
		   				break;
		   			}
		   		break;
		   }
		   const fetchResponse = await fetch(endPoint, options);
	       var data = await fetchResponse.json();
	       if (dispatchInfo!==undefined) {
	       		dispatchInfo.dispatch({type: dispatchInfo.type, data: data});
	       }
	   } catch (ex) {
	   	console.log(ex);
	  }
  };
}

const utilityService = new UtilityService();
export default utilityService;
