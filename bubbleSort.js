// This function swaps the i-th element of array with the j-th element
function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// This implements the iteration form of bubbleSort algorithm
function bubbleSort(arr){ 
    for(var h = 1; h < arr.length-1; h++){
        for(var i = 1; i < arr.length; i++){
            var j = i-1;
            if(arr[i] < arr[j]){
                swap(arr,i,j); 
            }
        }
    }
    return arr
}

var arr = [45,21,3,56,10,7,41,9];

var result = bubbleSort(arr);
console.log(result);