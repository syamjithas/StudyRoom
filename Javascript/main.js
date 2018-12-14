
var f2  = function(){

    var p = 3;

    var f1 = function(){
        var q = 2;
        return p + q;
    }

    return f1;

}();



console.dir(f2);

