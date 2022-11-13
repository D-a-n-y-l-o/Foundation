$('.vacancies > div').on('click', function(){
    $(this).children('.vacancy-icon').toggleClass('vacancy-icon-rotate');
    $(this).parent('.vacancies').toggleClass('hiring_color-change');
    $(this).children('.vacancy_pretitle-lower').toggleClass('hiring_color-change');
    $(this).children('.vacancy-icon').toggleClass('hiring_color-change');
    $(this).next('.vacancy_text').slideToggle(300);
})

$('.capability > div').on('click', function(){
    $(this).parent('.capability').toggleClass('capability_color-change');
    $(this).next('.capability_text').slideToggle(300);
})

$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});