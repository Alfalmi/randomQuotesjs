const quoteText = document.getElementById('quote-text'),
      quoteAuthor = document.getElementById('quote-author'),
      genQuoteBtn = document.getElementById('quote-btn');


function randomQuote(){

    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(data.content, data.author);
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
      

  })

}
randomQuote();

genQuoteBtn.addEventListener('click', () => {
    randomQuote();
});


