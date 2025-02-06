// Bus Fare Calculator
const passengerAge = 87;
const isStudent = false;
const isCitizen = true;
var fare = 800;
 
if (passengerAge < 10) {
  console.log('free');
}
else if (isStudent == true) {
  const discount1 = 800 * 50 / 100;
  var fare = 800 - discount1;
  console.log(fare)
}
else if (passengerAge >= 60 && isCitizen == true) {
  const discount2 = 800 * 15 / 100;
  var fare = 800 - discount2
  console.log(fare)
 }
 else (
  console.log(fare)
 )