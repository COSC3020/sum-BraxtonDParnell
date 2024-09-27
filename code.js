function sum(a) {
    var sum = 0;
    //changed sum to start at zero so the first elemtent in a does not get counted twice.
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
