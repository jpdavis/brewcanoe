//================================
//VARIABLES
//================================
var express 		= require("express"),
	flash			= require("connect-flash"),
	cookieSession 	= require("cookie-session"),
	app 			= express();

//================================
//SET USE IMPORTED PACKAGES
//================================
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

//================================
//SET COOKIE-SESSION SETTINGS
//================================
app.use(cookieSession({
	name: "anyOldSessionNameWillDo",
	keys: "The quick brown fox jumped over the lasagna dog.",
	maxAge: 300000,
}));

//================================
//DEFINE CONNECT-FLASH VARIABLES
//================================
app.use(flash());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    res.locals.info = req.flash("info");
    res.locals.warning = req.flash("warning");
    next();
});

//================================
//ROUTES
//================================
//var homeRoutes		= require("./routes/home");
//app.use(homeRoutes);

app.get("/", function(req, res){
	res.render("home");
});


//comment

app.listen(process.env.PORT || 4000, process.env.IP, function(){
	console.log("Brew Canoe server is listening");
});