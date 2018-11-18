function loadScripts(){
    Portfolio.fetchContent();
    hoverColorForPorjectBox();
    toggleMenu();
    initSlider();
    initGrid();
    $('.screenFiller a').on('click', function(){
        $('.screenFiller').css('margin-top', '-100%');
        setTimeout(() => {$('.screenFiller').hide()},1000)
    });
    $('.projectBox').each(function(){
        randomColor($(this));
        loadStars($(this));
    });
    githubStats();
    $('#about button').on('click', switchAboutViews);
    $('.gridView').hide();
    $('.menuOpener').on('click', menuOpener);
    $('.headerInner a').on('click', closeMenuOnClickedLink);
}


window.addEventListener('load', loadScripts);

function initSlider(){
    if (screen.width < 768){
        let sliderScreenSize = $('.slider').width();
        $('.slider .projectBox').css("width", sliderScreenSize);
        $('.sliderNav').css("width", sliderScreenSize);
    } else {
        let sliderScreenSize = $('.slider').width();
        $('.slider .projectBox').css("width", sliderScreenSize / 3);
        $('.sliderNav').css("width", sliderScreenSize + 100 + "px");
    }
    $('.slider .projectBox').first().addClass('firstVisible');
    $('.slider .projectBox:nth-last-child(3)').addClass('lastThree');
    $('.prevBTN').css('opacity', '0.2');
    $('.slider .firstVisible').next().addClass('centerImage');
    $('.nextBTN').on('click', slideRight);
    $('.prevBTN').on('click', slideLeft);
}
function initGrid() {
    $('.projectBox').on('click', buildExpand);
    $('.selectView').on('click', selectPortfolioView);
    $('.sortLanguage').on('change', sortByLanguage);
    $('.sortByRating').on('change', sortByRating);
}