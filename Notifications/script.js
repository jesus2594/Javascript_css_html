$('button').click(function(){
    $('.alert').addClass("show")
    $('.alert').removeClass("hide")
    $('.alert').addClass("showAlert")
    setTimeout(() => {
        $('.alert').removeClass("show")
        $('.alert').addClass("hide")
    }, 5000);
});
$('.close-btn').click(function(){
    $('.alert').removeClass("show")
    $('.alert').addClass("hide")

});