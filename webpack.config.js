var path = require("path");
module.exports = [{
"name":"mmtflix",
"entry":[
	"./src/scripts/root/init.view.js"
],
"output":{
		"path":path.resolve("./src/static"),
		"filename":"build.js"},
"resolve":{
	"extensions":[".js",".jsx"],
	"modules":["node_modules"]
},
"module":{
"rules":[
	{
		"test":/\.(js|jsx)$/,
		"loader":"babel-loader",
		"exclude":/node_modules/
	},
	{
      "test":/\.css$/,
      "use":["style-loader","css-loader"]
    }
]
}
}]