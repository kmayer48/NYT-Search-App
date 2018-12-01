//search term variable
var searchTerm = $('#search-term').val;
console.log(searchTerm);
//capture the record number
var recordNumbers = $('#number-of-results').val;
console.log(recordNumbers);
//start year variable
var startYear = $('#start-year').val;
console.log(startYear);
//end year variable
var endYear = $('#end-year').val;
console.log(endYear);
//search function
$('.btn-primary').on("click", function() {
    console.log("This worked")
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "30ffc17779904c11b01b28c498697af2",
    'q': searchTerm,
    'begin_date': startYear,
    'end_date': endYear,
    'page': 1,
});
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);

    var newArticle = $('<div>')

    });
});

//clear result function
$('.btn-danger').on("click", function() {
    searchTerm.val('');
    recordNumbers.val('');
    startYear.val('');
    endYear.val('');
});
