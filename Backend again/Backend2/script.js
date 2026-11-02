const fs = require('fs');

// fs.writeFile("hey.txt", "Hii kaise hoo", function(err){
//     if(err) console.error(err);
//     else{console.log("done")}
// })
// fs.appendFile("hey.txt", " m to acha hu", function(err){
//     if(err) console.error(err);
//     else{console.log("done")}
// })

// fs.rename("hey.txt", "Hlo.txt", function(err){
//     if(err) console.error(err);
//     else{console.log("done")}
// })

fs.copyFile("Hlo.txt", "./copy/chacha.txt", function(err){
    if(err) console.error(err);
    else{console.log("done")}
})

fs.unlink("Hlo.txt", function(err){
    if(err) console.error(err);
    else{console.log("removed")}
})//to remove file


//rmdir --to remove folder
//{recursive: true}--only used if the folder is not empty

fs.rmdir("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    else{console.log("removed")}
})