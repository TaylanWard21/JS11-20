function firstLast6 (array){
    if (array[0] == 6 || array[array.length - 1] == 6 ){
        return true;
    }else{
        return false;
    }
}
function has23 (x,y) {
    if (array[0] == 2 || array[0] == 3 || array[1] == 2 || array[1] == 3) {
        return true;
    } else {
        return false;

    }
}


function fix23 (x,y,z){
    if (array[0] == 2 && array[1] == 3){
        return x,0,z;
    }
    if (array[1] == 2 && array[2] == 3){
        return x,y,0;
    }else{
        return array;
    }
}

function countYZ(string) {
    var count = 0;
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " " && (string[i - 1] == "y" || string[i - 1] == "z")) {
            count++;
        }
    }
    if (string[string.length - 1] == "y" || string[string.length - 1] == "z") {
        count++;
    }
    return count;
}

function endOther(uno,dos){
    uno = uno.toLowerCase();
    dos = dos.toLowerCase();
    var  shorter;
    var  longer;
    if(uno.length == dos.length){
        return (uno == dos);
    }else if (uno.length < dos.length ){
        shorter = uno;
        longer = dos;
    }else{
        shorter = dos;
        longer = uno;
    }
    var end = longer.substring(longer.length - shorter.length);
    return ( shorter == end);
}

function starOut(star) {
    var result = " ";
    var wordLowerCase = star.toLowerCase();
    for (var i = 0; i < star.length; i++) {
        if (star[i] !== "*" && star[i + 1] !== "*" && star[i - 1] !== "*") {
             result = result + star[i];
        }
    }
    return result;
}

function getSandwich(bread){
    var result = " ";
    var bread1 = bread.indexOf( "bread");
    var bread2 =  bread.lastIndexOf("bread");
        if( bread1 == -1){
            return result;

        }
        if (bread1 == bread2){
            return result;
        }
       return bread.substring(bread1 + 5, bread2);

    }

function canBalance(array) {
    var add1 = 0;
    var add2 = 0;
    for (var i = 0; i < array.length; i++) {
        add1 += array[i]
        for (var x = i + 1; x < array.length; i++) {
            add2 += array[i]
        }


        if (add1 == add2) {
            return true;
        }
        add2 = 0;
    }

    return false;
}

function countClumps(array){
    var copy = 0;
    for (var i = 0; i < array.length; i++){
        if( array[i] === array[ i + 1] && array[i] !== array [ i + 2]){
             copy ++;


        }

    }
    return copy;

}

function evenlySpaced(a,b,c){
    if(a - b === b - c || a - c === c - b  || b - c === c - a || b - a === a - c ){
        return true;
    }else{
        return false;
    }

}






