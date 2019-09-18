/* Add all the required libraries*/

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html



var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
	mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        Listing.findOne({ "name": "Library West" }, '', function (err, location) {
            if (err) throw err;
            console.log(location);
        });
};
var removeCable = function () {
    mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        Listing.findOne({ "code": "CABL" }, '', function (err, location) {
            if (err) throw err;
            console.log(location);
        });
	Listing.deleteOne({"code": "CABL"}, function (err) {if (err) throw err;});
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        Listing.findOneAndUpdate({ "name": "Phelps Laboratory" }, { $set: { address: '1953 Museum Rd, Gainesville, FL 32603, United States' }}, function (err, location) {
            if (err) throw err;
            console.log(location);
        });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    console.log("TEST 4");
    mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        Listing.find({}, function (err, location) {
            if (err) throw err;
            location.forEach((e) => {
                console.log(e);
            });
        });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
