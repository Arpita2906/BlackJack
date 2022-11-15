let cards=[];
let cardsEl=document.getElementById("cards");
let sumEl=document.getElementById("sum");
let messageEl=document.getElementById("message");
let isblackjack=false;
let outofgame=false;
function startGame()
{
    outofgame=false;
    isblackjack=false;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}
function renderGame()
{
    cardsEl.textContent="Cards:"+ " ";
    sumEl.textContent="Sum: "+ " "; 
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent+=sum;
    if(sum<21)
    {
        messageEl.textContent="Do you want to draw a new card?";
    }
    else if(sum===21)
    {
        messageEl.textContent="That's a Blackjack!";
        isblackjack=true;

    }
    else{
        messageEl.textContent="You are unfortunately out of the game.";
        outofgame=true;
    }
}
function getRandomCard()
{
    let randomnum=Math.floor(Math.random()*13)+1;
    if(randomnum>10)
    {
        return 10;
    }
    else if(randomnum===1)
    {
        return 11;
    }
    else return randomnum;
}
function newCard()
{
    if(isblackjack==false && outofgame==false)
    {
        let newCard=getRandomCard();
        sum+=newCard;
        cards.push(newCard);
        renderGame();
    }   
}