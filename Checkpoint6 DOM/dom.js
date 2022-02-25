/*******************************************************************************/ 
//My products
var produit1 ={
    nom: "Maestro Passion",
    prix: 5.5,
}
var produit2 ={
    nom: "Chocolat fourré Club (45gr noisette)",
    prix: 1.5,
}
var produit3 ={
    nom: "Maestro Crisponuts",
    prix: 0.95,
}
var prixdiv=[produit1.prix, produit2.prix, produit3.prix]
/***********************produit1********************* */
alert("my dom checkpoint");
var prixtot=document.getElementById("prixtotttc"); console.log(prixtot);
//++
var plus = document.querySelectorAll('.btnplus'); console.log(plus);
var qt = document.querySelectorAll(".quantitepart"); console.log(qt);
var pp = document.querySelectorAll(".prixpart"); console.log(pp);
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function() {
        qt[i].innerHTML++;
        pp[i].innerHTML=qt[i].innerHTML*prixdiv[i];   
        prixtot.innerHTML=Number(pp[0].innerText)+Number(pp[1].innerText)+Number(pp[2].innerText);     
})
}
//--
var minus = document.querySelectorAll('.btnmoins'); console.log(minus);
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function() {
        if(qt[i].innerText > 1){
            qt[i].innerText--; 
            pp[i].innerHTML=qt[i].innerHTML*prixdiv[i];
            prixtot.innerHTML=Number(pp[0].innerText)+Number(pp[1].innerText)+Number(pp[2].innerText);  
            }
    })
}
    //****** like btn*/
var btnheart = document.querySelectorAll('.fa-heart'); console.log(btnheart);
//adding event listener
for (let i = 0; i < btnheart.length; i++){
    btnheart[i].addEventListener('click', function() {
        if (btnheart[i].style.color === "grey") {
            btnheart[i].style.color = 'red'
        } else {
            btnheart[i].style.color = "grey"
        }
    })
}
//****** remove btn */
var btntrash = document.querySelectorAll('.fa-trash-alt'); console.log(btntrash);
//adding event listener : removing the product
for (let i = 0; i < btntrash.length; i++){
    btntrash[i].addEventListener('click', function() {
        this.parentNode.parentNode.parentNode.remove(this);
        pp[i].innerHTML=0;
        prixtot.innerHTML=Number(pp[0].innerText)+Number(pp[1].innerText)+Number(pp[2].innerText);  
        })
}