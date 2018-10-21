$('.projectBox').on('click', buildExpand);

function buildExpand(e) {
    console.log(e.target)
    console.log($(this).attr('data-project'));
    $('.descriptionBox').html('');
    $('.descriptionBox').html($(this).html());
    // $('.descriptionBox').show();
    // var boxTitle = $('<h2>').text($(this).find('.projectName').text());
    // $('.descriptionBox').append(boxTitle);


    // var parent = ($(this)[0]);
    // var expandWrapper = $('<div>');
    // var boxTitle = $('<h2>').text($(this).find('.projectName').text());
    // expandWrapper.attr('class', 'hi');
    // expandWrapper.append(boxTitle);
    // $(parent).after(expandWrapper);
    console.log($(this)[0])
}
