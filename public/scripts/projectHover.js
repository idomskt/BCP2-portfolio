function buildExpand(e) {
    const infoBox = $("<div>").toggleClass('popup');
    $(infoBox).text('');
    $(infoBox).text(($(this).find('h3').text()));
    $('main').append(infoBox);
    console.log($(this).find('h3').text());
    console.log(e);
}
