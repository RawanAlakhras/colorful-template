
$('.p').css('display','none');
$("input[name='card']").on("click", function(){
        $(".template").toggle(this.value === "false" && this.checked);
        $('.p').toggle(this.value === "true" && this.checked);
    }); 

 
 
