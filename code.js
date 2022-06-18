// Storing the API endpoint in a variable
const url = "https://type.fit/api/quotes/";

// Fetching the API
fetch(url)
    .then(function (response) {
        // Converting the response into JSON
        return response.json();
    })
    .then(function (data) {
        // Functionality to generate quotes
        let Button = document.querySelector("button");
        Button.addEventListener("click", function () {
            let RandomQuotes = Math.floor(Math.random() * data.length);
            let Quotes = (data[RandomQuotes].text);
            let Author = (data[RandomQuotes].author);
            document.querySelector(".quote").innerHTML = '"' + Quotes + '"';
            document.querySelector(".author").innerHTML = "- " + Author + ".";
        })

    });