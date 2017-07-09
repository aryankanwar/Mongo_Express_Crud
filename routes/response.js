exports.sendInsertionErrorResponse 			= sendInsertionErrorResponse;
exports.emptyCollectionResponse    			= emptyCollectionResponse;
exports.sendDataInsertedResposne    	    = sendDataInsertedResposne;
exports.sendDataDeletionErrorResposne  	    = sendDataDeletionErrorResposne;
exports.sendDataSuccessfullFetchResponse    = sendDataSuccessfullFetchResponse;
exports.sendDataSuccessfullDeleteResponse   = sendDataSuccessfullDeleteResponse;
exports.sendDataUpdationErrorResposne       = sendDataUpdationErrorResposne;
exports.sendDataSuccessfullUpdationResponse = sendDataSuccessfullUpdationResponse;



function sendInsertionErrorResponse(res) {
    var response = {
        error   :   'Failure in insertion of data.'
    };
    res.send(response);
}

function emptyCollectionResponse(res) {
    var response = {
        error   :   'Empty collection.'
    };
    res.send(response);
}

function sendDataInsertedResposne(res) {
    var response = {
        msg   :   'Documents inserted in collection.'
    };
    res.send(response);
}

function sendDataDeletionErrorResposne(res) {
    var response = {
        msg   :   'Documents not deleted in collection.'
    };
    res.send(response);
}
function sendDataSuccessfullFetchResponse(res, data) {
    var response = {
        msg   : 'Documents in collection.',
        data  :  data
    };
    res.send(JSON.stringify(response));
}

function sendDataSuccessfullDeleteResponse(res) {
    var response = {
        msg   : 'Documents deleted in collection.',
    };
    res.send(JSON.stringify(response));
}

function sendDataUpdationErrorResposne(res) {
    var response = {
        msg   :   'Documents not upated in collection.'
    };
    res.send(response);
}

function sendDataSuccessfullUpdationResponse(res) {
    var response = {
        msg   : 'Documents updated in collection.',
    };
    res.send(JSON.stringify(response));
}