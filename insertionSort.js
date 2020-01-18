// This implements the shift function
function shift(array, index1, index2) {
	if (index1 < index2) {
		return array;
	}
	var x = array[index1];
	for (var i = index1; i >= index2 + 1; i--) {
		array[i] = array[i - 1];
	}
	array[index2] = x;
	return array;
}

// This implements the insertion sort algorithm
function insertionSort(array) {
    for(var i = 1; i < array.length; i++){
        var j = i;
        while(array[i] < array[j-1] && j>0){
            j--;            
        }
        shift(array,i,j);
    }
    return array;
}
