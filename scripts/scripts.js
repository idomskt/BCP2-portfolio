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
    var front = $('.fsTitle');
    setTimeout(function(){
        $('.fsTitle').css({'opacity':0}).animate({'opacity':1});
        $('.front img').css({'opacity':0}).animate({'opacity':1});
    }, 2000);
    setTimeout(function(){
        $('.front').css({'opacity':1}).animate({'opacity':0});
        $('.front').css('display', 'none');
    }, 8000);
};


function hoverColorForPorjectBox() {
    $('.projectBox').hover(function(){
        $(this).find('.bgOverlay').css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16))
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

