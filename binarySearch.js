function binarySearch(array, x) {
	// return a Boolean: true if x is in array, and false otherwise
    let n = array.length;
    let r = n
    let l = 1
    while (r >= l){
        let m = Math.floor((r+l)/2);
        if (array[m] == x){
            return true;
        } else if(array[m] > x){
            r = m - 1;
        } else {
            l = m + 1;
        }     
    }
    return false;    
}

