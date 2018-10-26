function Portfolio(portfoliosParameters) {
    this.name = portfoliosParameters.name;
    this.photo = portfoliosParameters.photo;
    this.link = portfoliosParameters.link;
    this.description = portfoliosParameters.description;
}
Portfolio.all = [];

Portfolio.prototype.toHtml = function() {
    var convertToHandleBar = Handlebars.compile($('#portfolio-template').html());
    var fillTemplate = convertToHandleBar(this);
    return(fillTemplate);
}

Portfolio.allPortfolios = function(rawData) {
    rawData.forEach(function(eachPortfolio){
        Portfolio.all.push(new Portfolio(eachPortfolio));
    });
}

Portfolio.printToScreen = function() {
    Portfolio.all.forEach(function (eachPortfolio) {
        $('#projectsList').append(eachPortfolio.toHtml());
    });
}

Portfolio.fetchContent = function() {
    if(localStorage.Portfolios) {
           Portfolio.allPortfolios(JSON.parse(localStorage.Portfolios));
           Portfolio.printToScreen();
    } else {
       function getJSON() {
           $.get("../JSON/projectsData.json", showJSON);
       }
       getJSON();
       function showJSON(response) {
           localStorage.setItem('Portfolios', JSON.stringify(response));
           Portfolio.allPortfolios(response);
           console.log(Portfolio.all);
           Portfolio.printToScreen();
       }
   }
}
