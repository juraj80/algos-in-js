function insertVector(vector, x, j){
    var i = vector.length;
    var result = JSON.parse(JSON.stringify(vector));
    result.push(" ")
    while(i >= j-1){
        result[i] = result[i-1]
        i = i - 1
    }
    result[j-1] = x
    return result
    }

function permuteVector(vector){
    var result = [];
    result.push([vector[0]]);
    for (var i = 1; i < vector.length; i++){
        var temp = JSON.parse(JSON.stringify(result));
        result = []
        for (var j = 1; j <= temp.length; j++){
            for (var k = 1; k <= i+1; k++){
                var p = insertVector(temp[j-1], vector[i], k);
                result.push(p);
            }
        }
    }
    return result
}

var vector = ["A","B","C","D"]

console.log(permuteVector(vector))
//console.log(insertVector(vector, "D", 3))
