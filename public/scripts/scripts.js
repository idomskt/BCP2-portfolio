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