$.noConflict();
jQuery(function($){
    $("p").click(function(){
        $(this).fadeOut(1000);
    });
    
    $("#show-button").click(function(){
        $("p").fadeIn(1000);
        $("p").each(function(index, elem){
            $(elem).html($(elem).attr("data-old-value"));
        });
    });
    
    $("button#change-button").click(function(){
        $("p").each(function(index, elem){
            console.log($(elem).html());
            $(elem).attr("data-old-value", $(elem).html());
        });
        $("p").html("<b>jQuery</b> is still working!");
    });
});


