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
    // $('.portfolioDisplay').show();
    // $('#about').hide();
    $('section').show();
}
const aboutPage = () => {
    $('.screenFiller').hide();
    $('.portfolioDisplay').hide();
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

function githubStats() {
    stats = {};
    stats.all = [];
    repoList = () => {
        var ul = $('<ul>');
        stats.all.map(eachRepo => {
            return ul.append($('<li>').append($('<a>').attr({'href': eachRepo.url, 'target': '_blank'}).text(eachRepo.name)));
        });
        $('.stats').append(ul);
    };
    const getGHData = $.getJSON('https://api.github.com/users/idomskt/repos')
    .then(data => data.map(repoName => {stats.all.push({name:repoName.name, url:repoName.html_url})})).then(repoList);
    
}
function selectPortfolioView(e) {
    const gridView = e.target.classList.contains('fa-th') ? $('.gridView').show() && $('.sliderOuter').hide() : $('.gridView').hide()  && $('.sliderOuter').show();
}

function switchAboutViews() {
    $('#about h1').toggleClass('fadeIn');
    $('.stats').toggleClass('fadeIn');
    $('.aboutMeInfo p').toggleClass('fadeIn');
    var $headText = $('#about h1').text() == 'ABOUT ME' ? 'My Repositories' : 'ABOUT ME';
    var $buttonText = $('#about button').text() == 'View Repositories' ? 'Read Info' : 'View Repositories';
    $('#about h1').text($headText);
    $('#about button').text($buttonText);
}

function menuOpener() {
    $('.headerInner').toggleClass('openMenu');
    $('.headerInner i').toggleClass('fas fa-times');
}
function closeMenuOnClickedLink() {
    $('.headerInner').toggleClass('openMenu');
}