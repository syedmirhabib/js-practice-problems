function anaToVori(ana){
    if(typeof ana!='number')
    {
        return 'invalid input please give a number ';
    }
    if(ana<0){
        return 'invalid input please give a positive number ';
    }

    let vori=ana/16;
    return vori;
}

let num=21;
let result=anaToVori(num);
console.log(result);