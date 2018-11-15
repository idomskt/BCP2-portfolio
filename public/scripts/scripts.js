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

const frontPage = () => {
    $('.allProjects').show();
    $('#about').hide();
}
const aboutPage = () => {
    $('.allProjects').hide();
    $('#about').show();
}

function randomColor(elem) {
    elem.find('.bgOverlay').css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16));
}

function hoverColorForPorjectBox() {
    $('.projectBox').hover(function(){
        randomColor($(this));
    });
};

stats = {};
stats.all = [];

const getGHData = $.getJSON('https://api.github.com/users/idomskt/repos')
.then(data => data.map(repoName => {stats.all.push(repoName.name)}));

repoList = () => {
    const ul = $('<ul>');
    stats.all.map(eachRepo => {
        return ul.append($('<li>').text(eachRepo))
    });
    $('.stats').append(ul);
}
function selectPortfolioView() {
    $('.sliderOuter').toggle();
    $('.gridView').toggle();
}