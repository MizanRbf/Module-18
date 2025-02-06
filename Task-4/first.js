// Nested-Friend

const myMarks = 90;
const friendMarks = 80;

if (myMarks < 80) {
  console.log('sleep');
}
else {
  if (friendMarks >= 80) {
    console.log('go for a lunch')
  }
  else {
    if (friendMarks < 80 && friendMarks >= 60) {
      console.log('good luck next time')
    }
     else {
      if (friendMarks < 60 && friendMarks >= 40) {
        console.log('keep your friend message unseen')
      }
      else {
        if (friendMarks < 40) {
          console.log('block your friend')
        }
      }
     } 
  }
}