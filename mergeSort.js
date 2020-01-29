function Merge(w,v){
    var m = w.length-1;
    var n = v.length-1;
    var s = []
    var i = 0;
    var j = 0;
    var k = 0;
    while(i<=m && j<=n){
        if(w[i] < v[j]){
            s[k] = w[i];
            i =  i + 1; 
        } else {
            s[k] = v[j];
            j =  j + 1;
        }
        k = k + 1;
    }
    while(i<=m){
        s[k] = w[i];
        i = i + 1;
        k = k + 1;
    }
    while(j<=n){
        s[k] = v[j];
        j = j + 1;
        k = k + 1;
    }
    return s;   
}


function MergeSort(unsortedArray){
    var n = unsortedArray.length;
    if(n <= 1){
        return unsortedArray;
    }
    var m = Math.floor(n/2);
    const L = unsortedArray.slice(0, m);
    const R = unsortedArray.slice(m);
    return Merge(MergeSort(L),MergeSort(R));
}

