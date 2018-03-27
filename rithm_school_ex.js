// 1.
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
//Time complexity: Q(n), looping through once (with proportion to n)
//Space complexity: Q(1)

// 2.
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
//Time complexity: Q(1), loop will only run a maximum of 10 times (not proportion to n, which could be 20 or something)
//Space complexity: Q(1)

// 3.
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
//Time complexity: Q(n), will run minimum of 10 times (even if n<10), but n greater than 10, it will loop proportionally to n
//Space complexity: Q(1)

// 4.
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
//Time complexity: Q(n), proportional to array
//Space complexity: Q(1), only require one additional unit of space -> for number to be stored in newArray

// 5.
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
//Time complexity: outer loop is O(n), inner loop is O(1) because it is not proportion to array, it is proportional to i)
//Space complexity: Q(n) because the numbers are stored in subtotal, as well as in subtotalArray
