function ott(){
    var total = null;
    for(var i = 0;i<arguments.length;i++){
        var cur = Number(arguments[i]);
        if(!isNaN(cur)){
            total += cur;
        }
    }
    return total;
}
var total = ott(1,3,6,8);
console.log(total);

total = ott(2,3,);
console.log(total);


