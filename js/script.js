/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*** 
 * I created a variable called quotes with an array of objects. Each object has key value pairs relating to the quote
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
 * The getRandomQuote function creates a variable called index that generates an integer 0-5 since there are 6 quotes in my array.
 * So, if the number 1 is generated, the 2nd object in the array will be generated.
***/
function getRandomQuote ()
{
  let index = Math.floor( (Math.random() * 6) );
    return quotes[index];
}
/***
 * The printQuote function calls the getRandomQuote function to access the quote object.
 * Then, the html variable accesses property values from the random quote object. The if statements check if there are additional key value pairs in the object and update the html variable.
 * The html variable is always updated with the </p> tag
 * I updated the CSS sheet with a tags section to ensure formatting is consistent if a tag is present
***/
function printQuote () {
  let quoteObj = getRandomQuote();
  let html = `<p class="quote"> ${quoteObj.quote} </p><p class="source"> ${quoteObj.source}`;
    if ( quoteObj.citation !== undefined ) {
    html = html + `<span class="citation">${quoteObj.citation}</span>`;
  } if ( quoteObj.year !== undefined ) {
    html = html + `<span class="year">${quoteObj.year}</span>`;
  } if ( quoteObj.tags !== undefined ){
    html = html + `<span class="tags">${quoteObj.tags}</span>`;
  }
  html = html + "</p>";

document.getElementById('quote-box').innerHTML = html;
/***
 * The randomColor function uses a template literal to generate random rbg() value. This value replaces the background color each time the function is called.
 * I learned about the document.body.style.background from https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
***/
function randomColor() {
  let color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
  document.body.style.background = color
}
randomColor();
}
/***
 * Finally the printQuote function is used in the addEventLIstener method, and I added the setInterval function to auto-refresh the page.
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 5000);