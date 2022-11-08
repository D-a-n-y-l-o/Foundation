$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length == 0){
        $(this).fadeOut();
    }
});

$('.modal_close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut()
});

$('.button_get-started').on('click', function(){
    $('.modal-overlay').fadeIn()
})