var randomNumber1=parseInt(Math.random()*6)+1

var x1="./dice"+randomNumber1+".png"

var randomNumber2=parseInt(Math.random()*6)+1

var x2="./dice"+randomNumber2+".png"


document.getElementsByClassName("img1")[0].setAttribute('src',x1)


document.getElementsByClassName("img2")[0].setAttribute('src',x2)


if(randomNumber1>randomNumber2){
    document.getElementsByTagName('h1')[0].innerHTML="🚩 Player 1 Won"
}
else if(randomNumber2>randomNumber1){
    document.getElementsByTagName('h1')[0].innerHTML="Player 2 Won 🚩"
}
else{
    document.getElementsByTagName('h1')[0].innerHTML="Draw"

}

    //.getAttributeNames