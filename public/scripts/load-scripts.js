function loadScripts(){
    Portfolio.fetchContent();
    // heroScreen();
    hoverColorForPorjectBox();
    toggleMenu();
    
    $('.projectBox').on('click', buildExpand);
    
    $('.projectBox').each(function(){
        randomColor($(this));
        loadStars($(this));
    });
    $('.sortDropDown').on('change', sortByRating);
}


window.addEventListener('load', loadScripts);