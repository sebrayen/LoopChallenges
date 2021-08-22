// factorial 
// write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end


// var start = 1;
// var end = 12;

// while(start <= end) {
//     console.log(start * end);
//     start++;
//     end--;
// }

var x = 1;
for(var i=1; i<13; i++) {
    x *= i;
}
console.log(x);