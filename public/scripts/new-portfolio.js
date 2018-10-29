$('#form-button').on('click', getFormInfo);

function getFormInfo() {
    var $newPortfolio = {};
    $newPortfolio.name = $('#portfolio-name').val();
    $newPortfolio.photo = $('#portfolio-photo').val();
    $newPortfolio.link = $('#portfolio-url').val();
    $newPortfolio.description = $('#portfolio-description').val();
    saveFormToLocalStorage($newPortfolio);
    $('.copyNewCode').show();
    window.scrollBy(0,400);
    console.log($newPortfolio);
}

function saveFormToLocalStorage(e) {
    localStorage.setItem('New Portfolio', JSON.stringify(e));
    $('.generatedCode').text('');
    $('.generatedCode').text(localStorage.getItem('New Portfolio'));
    console.log($('.generatedCode').text())
}

$('#copy-new-portfolio').on('click', copyCodeToClipboard);

function copyCodeToClipboard() {
    console.log($('.generatedCode'));
    var codeToCopy = $('.generatedCode');
    $(codeToCopy).focus();
    $(codeToCopy).select();
    document.execCommand("copy");
    $('.copiedFeedback').show();


}
