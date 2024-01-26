var fs = require('fs-extra');

// copy everything in the public folder to the build folder, except the index.html file
fs.copySync('public', 'build', {
  dereference: true,
  filter: file => file !== 'public/index.html'
});