const request = require('request');
const catName = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + catName;
request(url,(error,response,body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(error);
    return;
  }
  if (!catName) {
    console.log(`please enter a cat name`);
    return;
  }
  if (!data[0]) {
    console.log(`please enter a correct cat name`);
    return;
  }
  // if(body.name !== catName || body.id !== catName){
  //   console.log(`please enter a correct cat name`,error);
  // }
  console.log(data[0].description);
  // console.log(typeof data);
});
