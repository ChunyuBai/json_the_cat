const request = require('request');
// const catName = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url,(error,response,body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error)
      return;
    }
    if (!breedName) { 
      callback(`please enter a cat name`,null);
      return;
    }
    if (!data[0]) {
      callback("please eneter a correct cat name",null);
      return;
    }
    callback(null,data[0].description)
    // if(body.name !== catName || body.id !== catName){
    //   console.log(`please enter a correct cat name`,error);
    // }
    // console.log(data[0].description);
    // console.log(typeof data);
  });
};
module.exports = { fetchBreedDescription };
