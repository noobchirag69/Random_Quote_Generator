const url = "https://type.fit/api/quotes/";

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let Button = document.querySelector("button");
        Button.addEventListener("click", function () {
            let RandomQuotes = Math.floor(Math.random() * data.length);
            let Quotes = (data[RandomQuotes].text);
            let Author = (data[RandomQuotes].author);
            document.getElementById("quote").innerHTML = Quotes;
            document.getElementById("author").innerHTML = "- " + Author;
        })

    });