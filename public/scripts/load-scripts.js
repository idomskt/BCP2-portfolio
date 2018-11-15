function loadScripts(){
    Portfolio.fetchContent();
    // heroScreen();
    hoverColorForPorjectBox();
    toggleMenu();
    $('.slider .projectBox').first().addClass('firstVisible');
    $('.slider .projectBox:nth-last-child(3)').addClass('lastThree');
    $('.prevBTN').css('opacity', '0.2');
    $('.slider').find('.firstVisible').next().addClass('centerImage');
    $('.gridView').hide();
    $('.selectView').on('click', selectPortfolioView);
    $('.projectBox').on('click', buildExpand);

    $('.screenFiller a').on('click', function(){
        $('.screenFiller').css('margin-top', '-100%');
        setTimeout(() => {$('.screenFiller').hide()},1000)
    });
    
    $('.projectBox').each(function(){
        randomColor($(this));
        loadStars($(this));
    });
    $('.sortLanguage').on('change', sortByLanguage);
    $('.sortByRating').on('change', sortByRating);
}


window.addEventListener('load', loadScripts);