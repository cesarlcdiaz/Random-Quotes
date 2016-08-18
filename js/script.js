// here is where I stored the quotes 
   quoteOne = {
        quote : 'I meant what I said and I said what I meant.',
        source : 'Dr. Seuss',
        citation : 'dont know',
        year : '1990'
    }
        quoteTwo = {
        quote : 'Truth is everybody is going to hurt you: you just gotta find the     ones worth suffering for.',
        source : 'Bob Marley',
        citation : 'Smoke session',
        year : '1989'
    }
        quoteThree = {
        quote : 'Never interrupt your enemy when he is making a mistake.',
        source : 'Napoleon Bonaparte',
        citation : 'I dont know',
        year : '1991'
    }
        quoteFour = {
        quote : 'Fear is the main source of superstition, and one of the main sources of cruelty. To conquer fear is the beginning of wisdom.',
        source : 'Bertrand Russell',
        citation : 'I dont know',
        year : '1992'
    }
    quoteFive = {
        quote : 'Curiosity will conquer fear even more than bravery will.',
        source : 'James Stephens',
        citation : 'I dont know',
        year : '1993'
    }
//this is the variable that holds the array of quotes.
    var quotes = [quoteOne, quoteTwo, quoteThree, quoteFour,quoteFive];
//this function picks a quote in random from my quote storage and returns how to print on the page.
    function getRandomQuote() {
        var item = quotes[Math.floor(Math.random()* quotes.length)];
        return '<p class="quote">' + item.quote + '<p class="source">' + item.source + '<span class="citation"><br>' + item.citation + '<br><span class="year"><br>' + item.year + ', ' ;
    }
 //this function prints the quote when the button is click
    function printQuote() {
        document.getElementById('quote-box').innerHTML = getRandomQuote();
        document.getElementById('loadQuote').addEventListener("click", printQuote, false);
    }

    console.log(printQuote());