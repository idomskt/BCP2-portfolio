Handlebars.registerHelper("printItems", function(items) {
    const instructions = items.split('.');
    var html = "<ol>";
    instructions.forEach(function(entry) {
      html += "<li>" + entry + "</li>";
    });
    html += "</ol>";
    return html;
  });

function heroScreen() {
    setTimeout(function(){
        $('.fsTitle').css("opacity", "1");
        $('.front img').css("opacity", "1");
    }, 4000);
    setTimeout(function(){
        $('.front').css({"opacity": "0", "z-index": "-1"});
    }, 9000);
};

function randomColor(elem) {
    elem.find('.bgOverlay').css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16));
}

function hoverColorForPorjectBox() {
    $('.projectBox').hover(function(){
        randomColor($(this));
    });
};

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

function sortByRating() {
    console.log($(this).val());
    const selectVal = $(this).val();
    if(selectVal == 'easyFirst'){
        $(".projectBox").sort(sort_project).appendTo('#projectsList');
        function sort_project(a, b){
        return ($(b).data('rating')) < ($(a).data('rating')) ? 1 : -1;    
        }
    } else if (selectVal == 'hardFirst'){
        $(".projectBox").sort(sort_project).appendTo('#projectsList');
        function sort_project(a, b){
        return ($(b).data('rating')) > ($(a).data('rating')) ? 1 : -1;    
        }
    } else {
        $('#projectsList').html('');
        Portfolio.printToScreen();
        $('.projectBox').on('click', buildExpand);
        $('.projectBox').each(function(){
            randomColor($(this));
            loadStars($(this));
        });
        
    }
}

function loadStars(elem){

    console.log(elem.data('rating'));

    let portfolioRating = elem.data('rating');
    for (var i = 0; i < portfolioRating; i++) {
        elem.find('.rating').append('<i class="fas fa-star"></i>');
    }
}