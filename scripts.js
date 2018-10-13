function Portfolio(name, photo, link, description) {
    this.name = name;
    this.photo = photo;
    this.link = link;
    this.description = description;
}

var portfolios = [];

portfolios.push(new Portfolio('Hamburger Menu', '/images/mobilemenu.jpg', '', 'I have created a breakpoint at 768px. The mobile hamburger menu will be displayed up to 768px and will be hidden after that breakpoint'));
portfolios.push(new Portfolio('Mobile First', '/images/mobilefirst.jpg', '', 'I started to design this site with mobile first in mind. This site will look good on any screen size includes smartphones, tablets and desktops. I have created a seperate CSS files for each device'));

var menuIcon = document.getElementsByClassName('icon')[0];

function buildContent() {
    var mainContent = document.getElementById('projectsList');

    for(var portfoliosIndex = 0; portfoliosIndex < portfolios.length; portfoliosIndex++) {
        var div = document.createElement('div');
        var bgOverlay = document.createElement('div');
        // Front side of the flip card
        var frontSide = document.createElement('div');
        frontSide.setAttribute('class', 'frontSide');
        var portfolioName = document.createElement('h3');
        bgOverlay.setAttribute('class', 'bgOverlay');
        div.setAttribute('class', 'portfolioBox');
        portfolioName.innerText = portfolios[portfoliosIndex].name;
        div.style.backgroundImage = "url('" + portfolios[portfoliosIndex].photo + "')" ;
        mainContent.appendChild(div);
        div.appendChild(bgOverlay);
        frontSide.appendChild(portfolioName);
        div.appendChild(frontSide);
        // Back side of the flip card
        var backSide = document.createElement('div');
        backSide.setAttribute('class', 'backSide');
        var instructionsList = document.createElement('ul');
        var instructions = portfolios[portfoliosIndex].description.split('.');
        for(var instructionsIndex = 0; instructionsIndex < instructions.length; instructionsIndex++) {
            var li = document.createElement('li');
            li.innerText = instructions[instructionsIndex] + '.';
            instructionsList.appendChild(li);
        }
        backSide.appendChild(instructionsList);
        div.appendChild(backSide);
        
    }
}

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

menuIcon.addEventListener('click', toggleMenu);
window.addEventListener('load',buildContent);
