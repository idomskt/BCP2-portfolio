$('.nextBTN').on('click', slideRight);
$('.prevBTN').on('click', slideLeft);

function slideRight() {
    if(!($('.projectBox').hasClass('firstVisible lastThree'))) {
        $('.firstVisible').attr('class', 'projectBox movingImageLeft').next().attr('class', 'projectBox firstVisible').next().attr('class', 'projectBox centerImage');
        $('.slider .projectBox:nth-last-child(3)').addClass('lastThree');
        $('.prevBTN').css('opacity', '1');
    }
    if($('.projectBox').hasClass('firstVisible lastThree')) {
        $('.nextBTN').css('opacity', '0.2');
    }
}

function slideLeft() {
    if(!($('.slider .projectBox').first().hasClass('firstVisible'))) {
        $('.firstVisible').attr('class', 'projectBox centerImage').prev().attr('class', 'projectBox firstVisible');
        $('.centerImage').next().attr('class', 'projectBox');
        $('.nextBTN').css('opacity', '1');
    }
    if($('.slider .projectBox').first().hasClass('firstVisible')) {
        $('.prevBTN').css('opacity', '0.2');
    }
}