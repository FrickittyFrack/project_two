$(document).ready(function () {
    
    var url = 'https://newsapi.org/v2/everything?' +
            'q=Rainbow+6+Siege&' +
            'sortBy=popularity&' +
            'apiKey=161b9494907047dcabeff40d6eab76f1';

    var req = new Request(url);

    fetch(req)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);
        
        for(var i = 0; i < 15; i++) {

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
});

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