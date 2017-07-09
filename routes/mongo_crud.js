var config      = require('config');
var dbConfig    = config.get('Customer.dbConfig');
var response    = require('./response');
//to insert data
exports.insert = function (req,res){
	if (!req.body) {
		return res.sendStatus(400);	
	}
	var item = {
		"name"     : req.body.name,
		"password" : req.body.password 
	}
	db.collection(dbConfig.COLLECTION_NAME).insertOne(item, function(err,dbData){
		if(err || !dbData){
			return response.sendInsertionErrorResponse(res);
		}
		return response.sendDataInsertedResposne(res);
	});
}
//to get data
exports.read = function(req, res){
	db.collection(dbConfig.COLLECTION_NAME).find({}, {
		'_id': false
	}).toArray(function (error, dbData) {
		if (error || !dbData.length) {
			return response.emptyCollectionResponse(res);
		} else {
			return response.sendDataSuccessfullFetchResponse(res, dbData);
		}
	})
}  
 // to delete documents in collection	
exports.delete = function(req, res){
	db.collection(dbConfig.COLLECTION_NAME).remove({},function (error) {
		if (error) {
			return response.sendDataDeletionErrorResposne(res);
		} else {
			return response.sendDataSuccessfullDeleteResponse(res);
		}
	})
}  
	
exports.update = function(req, res){
	var userToUpdate = req.params.name;
	db.collection(dbConfig.COLLECTION_NAME).update({ name: userToUpdate}, req.body, function (error) {
		if (error) {
			return response.sendDataUpdationErrorResposne(res);
		} else {
			return response.sendDataSuccessfullUpdationResponse(res);
		}
	})
}  
	
