friends = ['Jon', 'Jeni', 'Sam', 'Tod', 'Ollie']
// var n = 99
// i = 0
// while (i <= friends.length) {
//     console.log("friends [i] + \":");
//     while (n>=2) {
//         console.log(String(n) + " lines of code in the file, " + String(n) + " lines of code;" + friends[i] + " strikes one out, clears it all out, " + String(n-1) + " lines of code in the file");
//         n-=1;
//     }
//     console.log("1 line of code in the File, 1 line of code;" + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
//     n = 99;
//     i += 1;
// }

for (i = 0; i < friends.length; i++) {
    for(j = 99; j > 0; j--) {
        if (j != 1 ){
            console.log(j + ' lines of code in the file, ' + j + ' lines of code. ' + friends[i] + ' takes one out, codes it all out, ' + j + ' lines of code in the file!')
         } else if (j == 1) {
            console.log(j + ' line of code in the file, ' + j + ' line of code. ' + friends[i] + ' takes one out, codes it all out, ' + j + ' line of code in the file!')
         }
    }
}