/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
{
  quote: 'Sashay Away!',
  source: "RuPaul Charles"
},
{
  quote: 'There can be a hundred people in the room, and 99 don\'t believe in you, but one does.',
  source: 'Lady Gaga',
  tags: ["Inspirational", "Happy"]
},
{
  quote: 'I think all pop music should be about who can make the loudest, brightest thing.',
  source: 'SOPHIE'
},
{
  quote: 'My mom always said life was like a box of chocolates. You never know what you\'re gonna get.',
  source: 'Tom Hanks',
  year: 1994,
  citation: 'Forrest Gump'
},
{
  quote: 'Toto, I\'ve a feeling we\'re not in Kansas anymore!',
  source: 'Judy Garland',
  year: 1939
},
{
  quote: 'Follow every rainbow, \'til you find your dream',
  source: 'Julie Andrews',
  citation: 'Sound of Music'
}
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote ()
{
  let index = Math.floor( (Math.random() * 6) );
    return quotes[index];
}



/***
 * `printQuote` function
***/
function printQuote () {
  let quoteObj = getRandomQuote();
  let html = `<p class="quote"> ${quoteObj.quote} </p>
  <p class="source"> ${quoteObj.source}`;
  if (quoteObj.citation !== undefined){
   html = html + `<span class="citation">${quoteObj.citation}</span>`;
  }
  if (quoteObj.year !== undefined){
    html = html + `<span class="year">${quoteObj.year}</span>`;
   }
  if (quoteObj.tags !== undefined){
    html = html + `<span class="tags">${quoteObj.tags}</span>`;
  }
  html = html + "</p>";

document.getElementById('quote-box').innerHTML = html;
function randomColor() {
  // document.body.style.background = 
  let color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
  document.body.style.background = color
    return color
}
randomColor();
return html
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 5000);