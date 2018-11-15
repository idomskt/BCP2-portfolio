function sortByRating() {
    const selectVal = $(this).val();
    if(selectVal == 'easyFirst'){
        $(".gridView .projectBox").sort(sort_project).appendTo('#projectsList');
        function sort_project(a, b){
            return ($(b).data('rating')) < ($(a).data('rating')) ? 1 : -1;    
        }
    } else if (selectVal == 'hardFirst'){
        $(".gridView .projectBox").sort(sort_project).appendTo('#projectsList');
        function sort_project(a, b){
            return ($(b).data('rating')) > ($(a).data('rating')) ? 1 : -1;    
        }
    } else {
        $('#projectsList').html('');
        $('.visibleSlider').html('');
        Portfolio.printToScreen();
        $('.projectBox').on('click', buildExpand);
        $('.projectBox').each(function(){
            randomColor($(this));
            loadStars($(this));
        });
        $('.slider .projectBox').first().addClass('firstVisible');
    $('.slider .projectBox:nth-last-child(3)').addClass('lastThree');
    $('.prevBTN').css('opacity', '0.2');
    $('.slider').find('.firstVisible').next().addClass('centerImage');
    }
}

function sortByLanguage() {
    const selectVal = $(this).val();
    $('.gridView .projectBox').show();
    $('.gridView .projectBox').each(function(i, obj) {
        if(!(selectVal == 'All')) {
            if(!($(obj).data('language') == selectVal)) {
                $(obj).hide();
            }
        } else {
            $('.projectBox').show();
        }
    });
}

function loadStars(elem){
    let portfolioRating = elem.data('rating');
    for (var i = 0; i < portfolioRating; i++) {
        elem.find('.rating').append('<i class="fas fa-star"></i>');
    }
}