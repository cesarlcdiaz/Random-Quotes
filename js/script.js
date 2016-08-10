//this is the variable that holds the array of quotes
 var quotes = [quoteOne, quoteTwo, quoteThree, quoteFour,quoteFive];
//this function picks a quote in random from my quote storage and returns how to print on the page.
    function getRandomQuote() {
        var item = quotes[Math.floor(Math.random()* quotes.length)];
        return '<h1>' + item.quote + '</h1><br>"' + item.source + '"<hr><p>' + item.citation + '<br><br>' + item.year + '<br>' ;
    }
//this function prints the quote when the button is click
    function printQuote() {
        document.getElementById('quote-box').innerHTML = getRandomQuote();
        document.getElementById('loadQuote').addEventListener("click", printQuote, false);
    }
    console.log(printQuote());
// here is where I store the quotes    
quoteOne = {
	quote : 'I meant what I said and I said what I meant.',
	source : 'Dr. Seuss',
	citation : 'During a concert',
	year : '1990'
}
quoteTwo = {
	quote : 'Intelligence is the ability to adapt to change.',
	source : 'Stephen Hawking',
	citation : 'Smoke session',
	year : '1989'
}
quoteThree = {
	quote : 'Never interrupt your enemy when he is making a mistake.',
	source : 'Napoleon Bonaparte',
	citation : 'Taking over a country',
	year : '1985'
}
quoteFour = {
	quote : 'Once we accept our limits, we go beyond them.',
	source : 'Albert Einstein',
	citation : 'He was on a break',
	year : '1999'
}
quoteFive = {
	quote : 'Curiosity will conquer fear even more than bravery will.',
	source : 'James Stephens',
	citation : 'He was afraid of the dark',
	year : '1970'
}