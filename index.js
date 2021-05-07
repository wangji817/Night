// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise((resolve, reject) => {
//     console.log(3);
//     resolve(4);
//     console.log(5);
// }).then((res) => {
//     console.log(res);
// });

// function print(...values) {
//     console.log(values);
// }
// print(1);
// print(1, 2, 3, 'aaaa', 4);


Array.prototype.filterFn = function (func) {
    var rst = [];
    var arr = this;
    console.log(arr);
    for (var i = 0; i < arr.length; i++)
        if (func.call(this, arr[i], i, arr))
            rst.push(arr[i]);
    return rst;
}

Array.prototype.mapFn = function (func) {
    var rst = [];
    var arr = this;
    console.log(arr);
    for (var i = 0; i < arr.length; i++)
        rst.push(func.call(this, arr[i], i, arr));
    return rst;
}
console.log([1, 3, 4, 5, 6, 7].filterFn(function (value, index, arr) {
    return value > 5
}));
// console.log([1, 3, 4, 5, 6, 7].mapFn(function (value, index, arr) {
//     return value * index
// }));

let x = [1,2,3], y = x, z = [4,5,6];
y[0] = 10;
y = z;
z[1] = 20;
x[2] = z = 30;
console.log(x , y , z);