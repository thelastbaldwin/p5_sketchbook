var ncp = require('ncp').ncp;
var sketchName = process.argv[2];
var sketchFolder = process.env.npm_package_config_sketchPath;
var template = sketchFolder + '/' + process.env.npm_package_config_template;

if(!sketchName){
  new Error("You must provide a name");
}

var newPath = sketchFolder + '/' + sketchName;
ncp(template, newPath, function(err){
  if (err) {
   return console.error(err);
  }
  console.log(newPath + ' created');
})
