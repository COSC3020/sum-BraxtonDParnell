function sum(a) {
    var sum = a[0];
    for(var i = 1; i < a.length; i++) {
        //var i should start as 1. var sum is already equal to the first element in the array a
        //therefore, having i start at 0 will make the sum count the first element twice while calculating the sum
        sum += a[i];
    }
    return sum;
}
