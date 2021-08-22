// sigma
// write code that will add all of the values from 1-100 onto some variable sum and at the end of console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end

var x = 0;
for(var i=1; i<101; i++) {
    x += i;
}
console.log(x);