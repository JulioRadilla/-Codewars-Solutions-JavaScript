/*Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

Examples (Input -> Output)
15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")*/
//Solution:
//Use an arrow function with 1 paramter for the usd currency
const usdcny = (usd) => {
    //Multiply USD times 6.75 and store in it a variable
    let yuan = usd * 6.75;
    //Use the template string to show how many chinese yuan and use the toFixed method with number two inside to get the last two decimals
    return `${yuan.toFixed(2)} Chinese Yuan`
}
