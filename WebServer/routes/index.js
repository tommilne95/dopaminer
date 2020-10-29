var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send("IT's Working!!");
});



////////////////////////////////////////////////////////////////////////////////////////////////////
//DOPAMINER DATA INPUT FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////


//takes a JSON string, establishes safe input, adds data to database
router.post('/dopaminer/adddata.html', function(req,res) {
	//must come in the form of a json string

	//establishes safe input

	//adds data to database

	//if it all went fine respond ok

	//if it didnt, send back error code
});



////////////////////////////////////////////////////////////////////////////////////////////////////
//DOPAMINER GET REQUESTS
////////////////////////////////////////////////////////////////////////////////////////////////////

//requests a data category, and a date range for that asdfa
router.get('/dopaminer/data/data.html', function(req,res){
	//pull the category and date range from req
	var type = "NOT IMPLEMENTED";
	var dateFrom = "NOT IMPLEMENTED";
	var dateTo = "NOT IMPLEMENTED";

	//request from db, turn into JSON string (JSON.stringify())


	var dataReturn = "NOT IMPLEMENTED";


	//temp
	res.send(dataReturn);
});

//returns main page
router.get('/dopaminer.html', function(req,res) {
	res.send('MAIN PAGE GO BRRRRRRRRRR');
});

////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router;
