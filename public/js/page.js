$(document).ready(function () {

    var siege = "q=Rainbow+6+Siege&";
    newsAPI(siege);

    function newsAPI(game) {

        $("#div-for-news").empty();

        var url = 'https://newsapi.org/v2/everything?' +
            game +
            'sortBy=popularity&' +
            'apiKey=161b9494907047dcabeff40d6eab76f1';
    
        var req = new Request(url);

        fetch(req)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);
            
            for(var i = 1; i < 15; i++) {

                var newNews = {
                    title: data.articles[i].title,
                    info: data.articles[i].description,
                    photo: data.articles[i].urlToImage,
                    link: data.articles[i].url
                };

                var newArticle = $("<div>");

                var newTitle = $("<div>");
                newTitle.attr("id", "title");
                newTitle.text(newNews.title);

                var newInfo = $("<div>");
                newInfo.attr("id", "description");
                newInfo.text(newNews.info);
                
                var newPhoto = $("<img>");
                var newLink = $("<a>");
                newLink.append(newPhoto);
                newPhoto.attr("id", "photo");
                newPhoto.attr("src", newNews.photo);

                
                
                newLink.attr("id", "link");
                newLink.attr("target", "_blank");
                newLink.attr("href", newNews.link);

                var newBreak = $("<hr>");
                newBreak.addClass("line");

                newArticle.append(newTitle);
                newArticle.append(newLink);
                newArticle.append(newInfo);
                newArticle.append(newBreak);
                $("#div-for-news").append(newArticle);
            };
        });
    };

    $("select").on("change", function() {

        var dropDown = document.getElementById("game-dropdown");
    
        var input = dropDown.value;
    
        switch(input) {
            case "0":
            var siege = "q=Rainbow+6+Siege&";
            newsAPI(siege);
            break;
    
            case "1":
            var smash = "q=Super+Smash+bros&";
            newsAPI(smash);
            break;
    
            case "2":
            var pubg = "q=PUBG&";
            newsAPI(pubg);
            break;

            case "3":
            var fortnite = "q=Fortnite&";
            newsAPI(fortnite);
            break;

            case "4":
            var redDead = "q=Red+Dead+Redemption&";
            newsAPI(redDead);
            break;

            case "5":
            var wow = "q=World+of+Warcraft&";
            newsAPI(wow);
            break;

            case "6":
            var tomsdiv = "q=The+Divsion&";
            newsAPI(tomsdiv);
            break;

            case "7":
            var overwatch = "q=Overwatch&";
            newsAPI(overwatch);
            break;

            case "8":
            var assCreed = "q=Assassin+Creed&";
            newsAPI(assCreed);
            break;
        };
    });

});

// function switchMe() {
//     var dropDown = document.getElementById("game-dropdown");

//     var input = dropDown.value;

//     console.log(input);

//     switch(input) {
//         case "0":
//         var siege = "q=Rainbow+6+Siege&";
//         newAPI(siege);
//         break;

//         case "1":
//         var smash = "q=Super+Smash+bros&";
//         newAPI(smash);
//         break;

//         case "2":
//         var pubg = "q=PUBG&";
//         newAPI(pubg);
//         break;
//     };
// };

function tabChanger(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
};