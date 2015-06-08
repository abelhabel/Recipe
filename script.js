$(document).ready(function() {
  console.log("Script included!");
  //show/hide images
  var imagesHidden = false;
  $('#hide').click(function()
  {
  	if(imagesHidden)
  	{
  		imagesHidden = false;
  		$('img').show();
  		$(this).html('Hide Images');
  	}else
  	{
  		imagesHidden = true;
  		$('img').hide();
  		$(this).html('Show Images');
  	}
  	
  });
  //mark ingredients
  $('li').click(function()
  {
  	if($(this).hasClass('bought'))
  	{
		$(this).removeClass('bought');
  	}else
  	{
  		$(this).addClass('bought');
  	} 
  });
  //position based on scrolling
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll < 200)
    {
    	$('#place').html('Intro');
    }else
    if(scroll > 200 && scroll < 800)
    {
    	$('#place').html('Meat');
    }else
	if(scroll > 800 && scroll < 1000)
	{
		$('#place').html('Potatoes');
	}else
	if(scroll > 1000)
	{
		$('#place').html('Gravy');
	}

  });
});