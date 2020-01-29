//Euclid's Algorithm

//compute GCD iterativately 
function GCDi(a,b){
    while(b != 0){
        var t = b;
        b = a % b;
        a = t;
    }
    return a;
}


//compute GCD recursively
function GCDr(a,b){
    if(b == 0){
        return a;    
    }
    else
    {
        var r = a % b;
        return GCDr(b,r);
    }
    
}


console.log(GCDr(84,30));