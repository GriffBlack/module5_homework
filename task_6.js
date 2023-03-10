let arr = [1, 2, 3, 4, 4, 5, 6, 8];
let arr2 = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
res = true;
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i] != arr2[j]) {
            res = false;
            i = arr2.length;
        }
    }
}
console.log(res);