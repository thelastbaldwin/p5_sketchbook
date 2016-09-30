var folderName = process.argv[2];

if (!folderName){
  throw 'No directory provided';
}

folderName = 'sketches/' + folderName;

var browserSync = require('browser-sync').create();

browserSync.init({
  files: [folderName + '/' + '*.html', folderName + '/' + '*.js'],
  server: true,
  startPath: folderName
});
