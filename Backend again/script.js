const fs = require('fs');

fs.writeFile("hey.txt", "Hii kaise hoo", function(err){
    if(err) console.error(err);
    else{console.log("done")}
})
fs.appendFile("hey.txt", " m to acha hu", function(err){
    if(err) console.error(err);
    else{console.log("done")}
})

fs.rename("hey.txt", "Hlo.txt", function(err){
    if(err) console.error(err);
    else{console.log("done")}
})

