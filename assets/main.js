var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=THZ6dcYKaGNOykPVDu9lgLSmrstGnzDr";
    var headlines = "&fq=source:headline"
    var results;
    var hl;
    var sports;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
        results = response
        h1 = results.response.docs
        console.log(h1)
  })