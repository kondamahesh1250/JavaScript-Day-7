function isDivisible(a){
    if(a%3==0&&a%5==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isDivisible(45));