var randomnumber1 = Math.floor(Math.random()*6)+1   //random number for dice 1
var randomnumber2 = Math.floor(Math.random()*6)+1   //random number for dice 2
// document.querySelector("img.img1").setAttribute("src",`images/dice${randomnumber1}.png`)
// document.querySelector("img.img2").setAttribute("src",`images/dice${randomnumber2}.png`)
document.querySelectorAll("img")[0].setAttribute("src",`images/dice${randomnumber1}.png`)//changing attributes for img1 so that images get changed
document.querySelectorAll("img")[1].setAttribute("src",`images/dice${randomnumber2}.png`)//changing attributes for img1 so that images get changed
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins"
}else if(randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML="There is a draw"
}else{
    document.querySelector("h1").innerHTML="player 2 wins"

}