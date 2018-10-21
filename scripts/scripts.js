function Portfolio(portfoliosParameters) {
    this.name = portfoliosParameters.name;
    this.photo = portfoliosParameters.photo;
    this.link = portfoliosParameters.link;
    this.description = portfoliosParameters.description;
}

var portfolios = [];

Portfolio.prototype.toHtml = function() {
    var convertToHandleBar = Handlebars.compile($('#portfolio-template').html());
    var fillTemplate = convertToHandleBar(this);

    return(fillTemplate);
}

// Portfolio.prototype.toHtml = function() {
//     var $newProjectBox = $('.projectBox.template').clone();
//     $newProjectBox.removeClass('template');
//     $newProjectBox.css("background-image", "url('" + this.photo + "')");
//     $newProjectBox.find('.bgOverlay').css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16));
//     $newProjectBox.find('.projectName').text(this.name);
//     var $splitString = this.description.split('.');
//     $.each($splitString, function(key, value){
//         var $listItem = $("<li></li>").text(value + '.');
//         $newProjectBox.find('.backSide ol').append($listItem);
//     });
//     return $newProjectBox;
// }


portfoliosProjects.forEach(function(eachProject) {
    portfolios.push(new Portfolio(eachProject));
})

portfolios.forEach(function(printEachProjectToScreen) {
    $('#projectsList').append(printEachProjectToScreen.toHtml())
})

$('.projectBox').hover(function(){
    $(this).find('.bgOverlay').css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16))
});

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

$(document).ready(function () {
    var front = $('.fsTitle');
    setTimeout(function(){
        $('.fsTitle').css({'opacity':0}).animate({'opacity':1});
        $('.front img').css({'opacity':0}).animate({'opacity':1});
    }, 2000);
    setTimeout(function(){
        $('.front').css({'opacity':1}).animate({'opacity':0});
        $('.front').css('display', 'none');
    }, 8000);

});

    // function fadeHeroToScreen() {
    //     $('header').hide();
    //     $('#projectsList').hide();
    //     $('.heroTitle').hide();
    //     $('.heroTitle').fadeIn("slow");
    //     setTimeout(function(){
    //         $('.front').fadeOut(4000);
    //         $('header').fadeIn(3000);
    //         $('#projectsList').fadeIn(3000);
    //     }, 6000);
    // }
    // $(document).ready(function() {
    
    //         fadeHeroToScreen();
    // });

// function scriptsToLoad() {
//     fadeHeroToScreen();
// }
// window.addEventListener('load', scriptsToLoad);