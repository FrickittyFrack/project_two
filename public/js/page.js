$(document).ready(function () {

    // Setting News to Default to R6

    var siege = "q=Rainbow+6+Siege&";
    newsAPI(siege);

    // News API

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

                // Creating object to save news elements

                var newNews = {
                    title: data.articles[i].title,
                    info: data.articles[i].description,
                    photo: data.articles[i].urlToImage,
                    link: data.articles[i].url
                };

                // Creating a div for each article

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

    // Dropdown for News API

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

// For Loops for each Carousel page

for (var i = 0; i < 3; i++) {

    carouselCreator(i, ".carousel-item.active");

};

for (var i = 3; i < 6; i++) {

    carouselCreator(i, ".carousel-item.page-2");

};

for (var i = 6; i < 9; i++) {

    carouselCreator(i, ".carousel-item.page-3");

};

for (var i = 9; i < 12; i++) {

    carouselCreator(i, ".carousel-item.page-4");

};

// Function with API and Div creation

function carouselCreator(forLoopVal, section) {

    var url1 =  "/api/streams";
        
    var req = new Request(url1);
        fetch(req)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);

    var newStream = {
        thumbnail: data.thumbnail[forLoopVal],
        streamer: data.streamer[forLoopVal],
        title: data.title[forLoopVal],
        isLive: data.live[forLoopVal]
    };

    console.log(newStream);

    // Div creation

    var stream = $("<div>");

    stream.addClass("twitch-div");
    
    var thumbcontainer = $("<div>");
    var twitchThumb = $("<img>");
    
    thumbcontainer.addClass("thumbnail")
    twitchThumb.addClass("thumb");
    twitchThumb.attr("src", newStream.thumbnail);
    
    var streamerName = $("<div>");
    
    streamerName.addClass("streamer");
    streamerName.text(newStream.streamer);
    
    var streamTitle = $("<div>");

    streamTitle.addClass("stream-title");
    streamTitle.text(newStream.title);
    
    stream.append(twitchThumb);
    stream.append(streamTitle);
    stream.append(streamerName);

    $(section).append(stream);

    });

};

// Logic for tabs

function tabChanger(evt, section) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    };
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    };
    document.getElementById(section).style.display = "block";
    evt.currentTarget.className += " active-tab";
};