var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgersController.js");

var port = 8080;

var app = express();
//where should we input listen.port(or if we even need to in this case)
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(process.env.PORT || port, function(err){
	if (err) throw err;
	console.log("Listening on port number " + port)
});
