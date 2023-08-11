const express = require('express');
const app = express();
  

// app.listen(3000, function(req, res) {
//   console.log("Server is running at port 3000");
// });
const axios = require('axios');

const searchParams = JSON.stringify({
  "checkin": "2023-09-01",
  "checkout": "2023-09-26",
  // "residency": "gb",
  "language": "ru",
  "guests": [
      {
          "adults": 2,
          "children": []
      }
  ],
  "longitude": 37.778002,
  "latitude": 55.717396,
  "radius": 1000,
  // "currency": "EUR"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.worldota.net/api/b2b/v3/search/serp/geo/',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic NTg5NzphNWE0OGQyYi0yZTI1LTQ1MDEtOTE1YS1jNDdkNWQzMjkyZTA=', 
    'Cookie': 'uid=TfTb5mTOTN6RwwqhjuQSAg=='
    
  },
  data: searchParams
};

let getData;

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  getData = response.data;
})
.catch((error) => {
  console.log(error);
});


app.get('/api', function(req, res) {
  res.json({
    getData
  });
});


app.listen(5000, function(req, res) {
    console.log("Server is running at port 5000");
});