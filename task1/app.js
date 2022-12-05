let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let result = document.getElementById("result");
let dateInput=document.getElementById("datainput");
const settime = setInterval(myFunction, 1000);
function myFunction() {
    const date = new Date();
    document.getElementById("time1").innerHTML = `Current time in Baku is: ${moment(date).format('MMMM Do YYYY, h:mm:ss a')}`;

    var newYorkDate = new Date(
        (new Date()).toLocaleString(
            'en-US',
            { timeZone: 'America/New_York' }
        )
    )
    document.getElementById("time2").innerHTML = `Current time in New York is: ${moment(newYorkDate).format('MMMM Do YYYY, h:mm:ss a')}`;

    var moscowDate = new Date(
        (new Date()).toLocaleString(
            'en-US',
            { timeZone: "Europe/Moscow" }
        )
    )
    document.getElementById("time3").innerHTML = `Current time in Moscow is: ${moment(moscowDate).format('MMMM Do YYYY, h:mm:ss a')}`;

    var moscowDate = new Date(
        (new Date()).toLocaleString(
            'en-US',
            { timeZone: "Europe/Moscow" }
        )
    )
    document.getElementById("time3").innerHTML = `Current time in Moscow is: ${moment(moscowDate).format('MMMM Do YYYY, h:mm:ss a')}`;


}

btn.addEventListener("click", () => {
    clearTimeout(settime);
})



btn2.addEventListener("click", () => {
    result.innerHTML = `${moment(dateInput.value).startOf('day').fromNow()}`;
})