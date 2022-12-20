$("img").click(function(){
    $(".mole1").hide();
});
    
$(".whack2").click(function(){
    $(".mole-two").hide();
});
    
$(".whack3").click(function(){
    $(".third-mole").hide();
    $(".mole1").show();
    $(".mole-two").show();
});
  

$(".reset").click(function(){
    $(".mole1").show();
    $(".mole-two").show();
     $(".third-mole").show();
    $(".yard").show();
    $(".yard-empty").show();
}); 



$(".reset").click(function(){
    $(".third-mole").show();
 
}); 

$(".yard-empty").click(function(){
    $(".yard").hide();
    $(".yard-empty").hide();
}); 


$(".reset").click(function(){
    $(".yard").show();
});  



