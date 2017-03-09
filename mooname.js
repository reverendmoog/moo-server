// Create an Name Object

var fs = require('fs');
var fAdj = fs.readFileSync('./adjectives.txt').toString().split('\n');
var fCow = fs.readFileSync('./cowlist.txt').toString().split('\n');

var mooName = {
 adj: fAdj,
 cow: fCow,
    rand: function(word,offset){       // Return a random word from an array
        return word[Math.floor(Math.random()*word.length-offset)];
    },
    generate: function(){
        var mName = "";
         mName += mooName.rand(mooName.adj,1) + "_" + mooName.rand(mooName.cow,1);
        return mName.toString(); 
    }
}
exports.mooName = mooName ;
