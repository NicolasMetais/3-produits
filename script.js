$.get('http://localhost:3000/', function (response) {
    var product = response;
    console.log(response);


/* var product = [
    {
        price : 30,
        img : 'canape.png',
        name : 'Canapé',
        like : true,
    } , 
    {
        price : 20,
        img : 'telephone.jpg',
        name : 'Téléphone',
        like : false,
    },
    {
        price : 10,
        img : 'fauteil.png',
        name : 'Fauteuil',
        like : false,
    }   
]; */

for (var i = 0; i < 3; i++){
    document.getElementById("body").insertAdjacentHTML('afterbegin', '<div class="container" id= "product' + i + '"></div>');
    document.getElementById("product" + i).innerHTML = '<h1>' + product[i].name + '</h1> <img class="imgProd" src="' + product[i].img +'" /> <p>' + product[i].price + '$ <img id="pannierProd' + i + '"src="panier.png"/> </p> <button class ="Bouton"> Buy </button> <img class="empti" id="empty'+ i + '"src="gland.png"/>';
}

document.getElementById('body').insertAdjacentHTML('afterbegin', '<img id="pannier" src="panier.png"/>');

    for (var i = 0; i < 3; i++){
    document.getElementsByClassName("Bouton")[i].addEventListener('click', function(){
        console.log("j'achete");
    });
    
}


 document.getElementById("empty0").addEventListener('click', function(){
    if (document.getElementById("empty0").src == 'http://12700.0.0.1:5500/gland.png'){   
        document.getElementById("empty0").src = 'gland1.png'
        product[0].like = true;
    } else {
        document.getElementById("empty0").src = 'gland.png'
        product[0].like = false;
    }
});
document.getElementById("empty1").addEventListener('click', function(){
    if (document.getElementById("empty1").src == 'http://127.0.0.1:5500/gland.png'){
        document.getElementById("empty1").src = 'gland1.png'
        product[1].like = true;
    } else{
        document.getElementById("empty1").src = 'gland.png'
        product[1].like = false;
    }
});
document.getElementById("empty2").addEventListener('click', function(){
    if (document.getElementById("empty2").src == 'http://127.0.0.1:5500/gland.png'){
        document.getElementById("empty2").src = 'gland1.png'
        product[2].like = true;
    } else{
        document.getElementById("empty2").src = 'gland.png'
        product[2].like = false ;
    }
});

document.getElementById("pannierProd0").addEventListener('click', function () {
    localStorage.setItem('fauteuil', product[0].name);
});

document.getElementById("pannierProd1").addEventListener('click', function () {
    localStorage.setItem('telephone', product[1].name);
});

document.getElementById("pannierProd2").addEventListener('click', function () {
    localStorage.setItem('canape', product[2].name);
});

console.log(localStorage);

});