function loadScripts(){
    Portfolio.fetchContent();
    // heroScreen();
    hoverColorForPorjectBox();
    toggleMenu();
    
    $('.projectBox').on('click', buildExpand);
    
    $('.projectBox').each(function(){
        randomColor($(this));
    });
    
}


window.addEventListener('load', loadScripts);