// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

// fetchCoordsByIP((error, ip) => {
//   if (error) {
//     console.log("Failed to find IP Coordinates", error);
//     return;
//   }
//   console.log("Hooray!, Coordinates found!", ip);
// });


fetchCoordsByIP('174.114.242.66', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

