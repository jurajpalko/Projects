var but1 = false;
var but2 = false;



if(localStorage.getItem(but1)==true){
    $("#this").css("background", "rgb(12, 29, 44)");
    $("#this").css("color", "rgb(176, 207, 169)");
    $('.table1').css("background", "rgb(12, 29, 44)");
    $('.button-one').html("Denny rezim");
    but1=!but1;
}else{
    $("#this").css("background", "lightsteelblue");
    $("#this").css("color", "rgb(12, 29, 44)");
    $('.table1').css("background", "rgb(185, 218, 218)");
    $('.button-one').html("Nocny rezim");
    but1=!but1;
}






$('.button-one').click(function(){
    
if(!but1){
    $("#this").css("background", "rgb(12, 29, 44)");
    $("#this").css("color", "rgb(176, 207, 169)");
    $('.table1').css("background", "rgb(12, 29, 44)");
    $('.button-one').html("Denny rezim");
    but1=!but1;
    localStorage.setItem('but1',but1);
}else{
    $("#this").css("background", "lightsteelblue");
    $("#this").css("color", "rgb(12, 29, 44)");
    $('.table1').css("background", "rgb(185, 218, 218)");
    $('.button-one').html("Nocny rezim");
    but1=!but1;
    localStorage.setItem('but1',but1);
}
    
});

$('.button-two').click(function(){
    
    if(!but1){
        $("#this").css("font-family", "monospace");
        $("#this").css("font-size", "2em");
        $("#this").css("font-weight", "800");
        $('.button-two').html("Normalne zobrazenie");
        but1=!but1;
    }else{
        $("#this").css("font-family", "Verdana");
        $("#this").css("font-size", ".8em");
        $("#this").css("font-weight", "normal");
        $('.button-two').html("PRE SLABOZRAKYCH");
        but1=!but1;
    }
    
    });

