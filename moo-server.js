#!/bin/env node
//==============================================================================
// moo-server.js
//==============================================================================
//
// General purpose server
//
//------------------------------------------------------------------------------

var DEBUG = false ;
var LOG = "moo-server V1.0.0: ";

// Localisation
var port = 8084 ;               // Port to listen on

var express = require('express'):
/*
    https = require('https'),
    request = require('sync-request'),
    sexec = require('sync-exec'),
    fs = require('fs');

*/
var app = express();

var mooname = require('./mooname');

//------------------------------
// Functions
//------------------------------
function debug(str){
     if(DEBUG){
          console.log(LOG+str);
     }
}

//------------------------------
// Create the REST end-points
//------------------------------

// Generate random cow name
app.get('/mooname', function (req, res) {
    res.send(mooname.mooName.generate());
});

// -----------------------------
// Start the sever
// -----------------------------
app.listen(port, function () {
    console.log(new Date() +': '+LOG+'moosvr listening on port '+port);
})
