const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const path = process.argv[3];

const fetcher = function(URL, path) {
  request(URL, (error, response, body) => {
  // console.log(body);
  if (error) {
    console.log("Error:", error);
    return
  } 
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  })
  });
};

fetcher(URL, path);
// console.log(URL, path);



