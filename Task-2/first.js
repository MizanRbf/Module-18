// BMI Calculator and Health Category

const BMI = 16;

// if (BMI < 18.5) {
//   console.log('you are underweight')
// }
// else if (BMI >= 18.5 && BMI <= 24.9) {
//   console.log('you are normal')
// }
// else if (BMI >= 25 && BMI <= 29.9) {
//   console.log('you are overweight')
// }
// else (
//   console.log('you are obese')
// )

// I make this ternary own 

BMI < 18.5 ? console.log('you are underweight') : BMI >= 18.5 && BMI <= 24.9 ? console.log('you are normal') : BMI >= 25 && BMI <= 29.9 ? console.log('you are overweight') : console.log('you are obese')