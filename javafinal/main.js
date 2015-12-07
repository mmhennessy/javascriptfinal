$(document).ready(function() {
	$("a").on('click', function() {
		$(this).css("background-color", "yellow");
	});

 $(function() {
 	$('images/camp.jpg').on('click', function() {
 		$(this).width('500px');
 	})
 });

  $(function() {
 	$('images/boats.jpg').on('click', function() {
 		$(this).width('500px');
 	})
 });

  $(function() {
 	$('images/hikingtrail.jpg').on('click', function() {
 		$(this).width('500px');
 	})
 }); 

  $(function() {
 	$('images/campcrafts.jpg').on('click', function() {
 		$(this).width('500px');
 	})
 });

  $(function() {
 	$('images/sports.jpg').on('click', function() {
 		$(this).width('500px');
 	})
 }); 

  $(function() {
 	$('images/tent.jpg').on('click', function() {
 		$(this).width('500px');
 	})
 });  

   $("h1").on('dbclick', function() {
    $("h1").css("font-size", $(this).val() + "28px");
  });

   $("h2").on('dbclick', function() {
    $("h2").css("font-size", $(this).val() + "24px");
  });

  $("p").on('dbclick', function() {
    $("p").css("font-size", $(this).val() + "18px");
  });

});  


