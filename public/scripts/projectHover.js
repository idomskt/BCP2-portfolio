function buildExpand(e) {
    $('.descriptionBox').css('left', '50%');
    const popup = $('.popup');
    const popupTitle = $('<h3>');
    const popupDesc = $('<ol>');
    const descAndIMGWrapper = $('<div>').attr('class', 'descIMGWrapper');
    const imgCSS = $(this).css('background-image');
    const imgSRC = imgCSS.replace('url(','').replace(')','').replace(/\"/gi, "");
    const popupIMG = $('<img>').attr('src', imgSRC);
    const exitBTN = $('<span class="exitPopup">').text('X');
    $(popup).html('');
    $(popupTitle).text(($(this).find('h3').text()));
    $(popupDesc).html(($(this).find('ol').html()));
    $(popup).append(popupTitle);
    $(popup).append(descAndIMGWrapper);
    $(popup).append(exitBTN);
    $(descAndIMGWrapper).append(popupDesc);
    $(descAndIMGWrapper).append(popupIMG);
    exitPopupFunc();
}
function exitPopupFunc() {
    $('.exitPopup').on('click', function(){
        $('.descriptionBox').css('left', '-2000px');
    })
}