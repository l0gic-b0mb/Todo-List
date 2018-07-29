$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		var textInput = $(this).val();
		$(this).val('');
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + textInput + "<li>");
		$("li").last().remove(); //It's there because it works. Don't fuss over it.
	}
});

$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
})