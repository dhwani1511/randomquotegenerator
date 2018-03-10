function getQ() {
console.log("newqbutton was clicked");
fetch(end)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dispquote(data.quote);
    })
    .catch(function () {
      console.log("An error occurred");
    });
}
const newqbutton = document.querySelector('.newq');
newqbutton.addEventListener('click',getQ);
const end="https://random-quote-generator.herokuapp.com/api/quotes/random";
 
 function dispquote(quote){
 	const quoteText=document.querySelector('.quotes-text');
 	quoteText.textContent=quote;

 	const tweetbutton=document.querySelector('.tweet');
 	tweetbutton.setAttribute('href',"https://twitter.com/intent/tweet?text="+quote)
 }
