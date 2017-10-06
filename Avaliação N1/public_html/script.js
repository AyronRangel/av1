function myFunction() {
    var a = Math.floor((Math.random() * 10) + 1);
    document.getElementById("n1").innerHTML = a;
    var b = Math.floor((Math.random() * 10) + 1);
    document.getElementById("n2").innerHTML = b;

    var c = Math.floor((Math.random() * 10) + 1);
    document.getElementById("n3").innerHTML = c;
    var d = Math.floor((Math.random() * 10) + 1);
    document.getElementById("n4").innerHTML = d;
    
    var e = Math.floor((Math.random() * 10) + 1);
    document.getElementById("n5").innerHTML = e;
    var f = Math.floor((Math.random() * 10) + 1);
    document.getElementById("n6").innerHTML = f;
    
    var g = Math.floor((Math.random() * 10) + 1);
    document.getElementById("n7").innerHTML = g;
    var h = Math.floor((Math.random() * 10) + 1);
    document.getElementById("n8").innerHTML = h;
}

function soma() {
    var a = document.getElementById("n1").innerHTML;
    var b = document.getElementById("n2").innerHTML;
    var result = parseFloat(a) + parseFloat(b);
    document.getElementById("resultado").innerHTML = result;

    var result2 = parseFloat(document.getElementById("resultado").value);

    if (result2 == result) {
        window.alert("Parabens! Você Consegui. Clique em Ok para ir para próxima História!");
    } else {
        window.alert("Você errou! tente novamente :)");
        myFunction();
    }


}

function diminuir() {
    var c = document.getElementById("n3").innerHTML;
    var d = document.getElementById("n4").innerHTML;
    var result = parseFloat(c) - parseFloat(d);
    document.getElementById("resultado2").innerHTML = result;

    var result2 = parseFloat(document.getElementById("resultado2").value);

    if (result2 == result) {
        window.alert("Parabens! Você Consegui. Clique em Ok para ir para próxima História!");
    } else {
        window.alert("Você errou! tente novamente :)");
        myFunction();
    }


}

function multiplicar() {
    var e = document.getElementById("n5").innerHTML;
    var f = document.getElementById("n6").innerHTML;
    var result = parseFloat(e) * parseFloat(f);
    document.getElementById("resultado3").innerHTML = result;

    var result2 = parseFloat(document.getElementById("resultado3").value);

    if (result2 == result) {
        window.alert("Parabens! Você Consegui. Clique em Ok para ir para próxima História!");
    } else {
        window.alert("Você errou! tente novamente :)");
        myFunction();
    }


}

function dividir() {
    var g = document.getElementById("n7").innerHTML;
    var h = document.getElementById("n8").innerHTML;
    var result = parseFloat(g) / parseFloat(h);
    document.getElementById("resultado4").innerHTML = result;

    var result2 = parseFloat(document.getElementById("resultado4").value);

    if (result2 == result) {
        window.alert("Parabens! Você Consegui. Clique em Ok para ir para próxima História!");
    } else {
        window.alert("Você errou! tente novamente :)");
        myFunction();
    }


}

