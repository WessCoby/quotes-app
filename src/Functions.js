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

let getQuote = () => {

};
export { timerBreakdown, getQuote };