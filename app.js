var express     = require('express');
var app         = express();
var mongo       = require('mongodb');
var bodyParser  = require('body-parser');
var config      = require('config');
var dbConfig    = config.get('Customer.dbConfig');
var mongo_crud  = require('./routes/mongo_crud');

// parse application/json 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}))

//CRUD
//routes for insert,create,update,delete
app.post('/api/users/insert', mongo_crud.insert);

app.get('/api/users/get', mongo_crud.read);

app.delete('/api/users/delete', mongo_crud.delete);

app.put('/api/users/update/:name', mongo_crud.update);

//mongo and server connection
var url = 'mongodb://localhost:'+ dbConfig.PORT+ '/' + dbConfig.DATABSE_NAME;

mongo.connect(url, function(err, database){
	if(err){
		return err;
	}
	db = database;
	console.log('Mongo database connected ...');
	app.listen(8000,function(){
		console.log('Listening at port 8000');
	});
});
