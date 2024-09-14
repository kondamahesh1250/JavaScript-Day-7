function isPositive(a){
    if(a>0){
        return true; 
    }
    else if(a<0){
        return false;
    }
    else{
        return "neither positive nor negative";
    }
}
console.log(isPositive(0));