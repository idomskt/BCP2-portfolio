function Portfolio(portfoliosParameters) {
    this.name = portfoliosParameters.name;
    this.photo = portfoliosParameters.photo;
    this.link = portfoliosParameters.link;
    this.description = portfoliosParameters.description;
}

var portfolios = [];

Portfolio.prototype.toHtml = function() {
    var $newProjectBox = $('.projectBox.template').clone();
    $newProjectBox.removeClass('template');
    $newProjectBox.find('.projectName').text(this.name);
    return $newProjectBox;
}

portfoliosProjects.forEach(function(eachProject) {
    portfolios.push(new Portfolio(eachProject));
})

portfolios.forEach(function(printEachProjectToScreen) {
    $('#projectsList').append(printEachProjectToScreen.toHtml())
})


function toggleMenu() {
    var menuList = document.getElementsByClassName('main-menu')[0];

    if(menuList.classList.contains('close')) {
        menuList.classList.remove('close');
        menuList.classList.add('open');
    } else {
        menuList.classList.remove('open');
        menuList.classList.add('close');
    }
}
