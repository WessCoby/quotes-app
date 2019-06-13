import quotes from './data/quotes-data';

const timerBreakdown = (time) => {

    let leadingZero = (number) => {
        if (number <= 9) {
            number = '0' + number;
        }
        return number;
    };

    //  Arrays created to work with the Date Object to match the equivalent getMonth() and getDay() number values
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // time = new Date();
    // Breaking down the date object
    let getDay = () => dayNames[time.getDay()], getMonthName = () => monthNames[time.getMonth()],
        getDayDate = () => leadingZero(time.getDate()), getYear = () => leadingZero(time.getFullYear()),
        getHours = () => leadingZero(time.getHours()), getMinutes = () => leadingZero(time.getMinutes()),
        getSeconds = () => leadingZero(time.getSeconds());

    // Present usable result
    let getFullDate = () => `${getDay()}, ${getMonthName()} ${getDayDate()}th, ${getYear()}`,
        getTimeNow = () => `${getHours()}:${getMinutes()}:${getSeconds()}`;

    // Return presentable results
    return { getFullDate, getTimeNow };
};

let fetchQuote = () => {
    let fetchedQuoteAuthor = '', fetchedQuote = '';

    let setQuote = (author, quote) => {
        fetchedQuote = quote;
        fetchedQuoteAuthor = author;
    };

    let output = () => {
        return {
            fetchedQuote, fetchedQuoteAuthor
        }
    };

    //  Produce a random number between 0 (included) and the specified argument (argument not included)
    let getRandomNumber = (maximumNumber = 3) => Math.floor(Math.random() * maximumNumber);

    // Break down the object into separate objects
    let main_database = quotes.quotes_database,
        single_quotes_with_unknown_authors = main_database[0].data[0],
        single_quotes_with_authors_known = main_database[0].data[1],
        author_collections = main_database[1].data;        // collection grouped by authors

    // Use switch statement to set which object to fetch the favoriteQuote from
    switch(getRandomNumber()) {
        case 0:
            let randomItem = getRandomNumber(single_quotes_with_unknown_authors.quotes.length);
            setQuote(single_quotes_with_unknown_authors.author, single_quotes_with_unknown_authors.quotes[randomItem].text);
            break;
        case 1:
            randomItem = getRandomNumber(single_quotes_with_authors_known.quotes.length);
            setQuote(single_quotes_with_authors_known.quotes[randomItem].author, single_quotes_with_authors_known.quotes[randomItem].text);
            break;
        default:
            randomItem = getRandomNumber(author_collections.length);
            let randomQuote = getRandomNumber(author_collections[randomItem].quotes.length);
            setQuote(author_collections[randomItem].author, author_collections[randomItem].quotes[randomQuote].text);
    }
    return { output }
};
export { timerBreakdown, fetchQuote };