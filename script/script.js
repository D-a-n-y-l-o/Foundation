$('.vacancies > div').on('click', function(){
    $(this).children('.vacancy-icon').toggleClass('vacancy-icon-rotate');
    $(this).parent('.vacancies').toggleClass('color-change');
    $(this).next('.vacancy_text').slideToggle(300);
})