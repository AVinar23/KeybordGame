$(document).ready(function () {
	var pic = $('.object');
	var mistake = $('.mistakeField');
   	var beginTime, begin = false, err, errCount = 0, time; 
   	var play = $('.playField');
   	var boolSeans = true;
   	var stories = {
   		"storie1" : "Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина. Первый из них, одетый в летнюю серенькую пару, был маленького роста, упитан, лыс, свою приличную шляпу пирожком нес в руке, а на хорошо выбритом лице его помещались сверхъестественных размеров очки в черной роговой оправе.",
   		"storie2" : "С минуту она стояла и смотрела в раздумье на дом. Вдруг из лесу выбежал ливрейный лакей и забарабанил в дверь. (Что это лакей, она решила по ливрее; если же судить по его внешности, это был просто лещ.) Ему открыл другой ливрейный лакей с круглой физиономией и выпученными глазами, очень похожий на лягушонка. Алиса заметила, что у обоих на голове пудреные парики с длинными локонами." 	
   	};
	var str;

	$(".start").click(function () {	
			$('html, body').animate({
	            scrollTop: $("#startGame").offset().top
	        }, 1000);
    });

   $('select[name="list"]').change(function(){
   		var el = $(this).val();
   	
   		$('.reset').css('display','inline-block');
   		$('.playField').css('display','flex');
   		resetGame();
   		str = stories[el];
   		$('.text').text(str);

		trackingInput();

		$(this).attr('disabled','disabled');
   });

   $('.reset').click(function(){	
   		resetGame();
   });

    function resetGame() {
   		$('#ourText').val('').css('display','block');
   		pic.css('left',0+'px');
   		mistake.css('display', 'none');
   		begin = false;
   		errCount = 0;
   };

   function trackingInput(){
   		$('#ourText').keyup(function(event){

   			var inputValue = $(this).val();  			

   			equals(str, inputValue);

   			//if(inputValue.length == err || inputValue == str.substr(0, inputValue.length)) 
   			
   			if(inputValue == str.substr(0, inputValue.length)) {	   			
	   			boolSeans = true;
	   			mistake.css('display', 'none');
	   		};
   		});
   };

   function equals(str, inputValue){ 

   		if (!begin || !beginTime) {
   			beginTime = new Date();
   		}
   		begin = true;

		if (boolSeans) {
			if(inputValue.substr(inputValue.length-1) == str.substr(inputValue.length-1, 1)){
				
				if(event.which == 16 || event.which == 8 || event.which == 17 || event.which == 18) {
					return
				} else {
					var x = parseInt(pic.css('left').substr(0, pic.css('left').indexOf('p')));
	   			var step = ($('.segment').width()/ str.length);

               pic.css('left', (x + step) + 'px');
				}

	   			if(inputValue.length == str.length){
	   				time = ((new Date())-beginTime)/1000;
					$('#ourText').val('').css('display', 'none');
					showResults();
					begin = false;
					return;				
	   			}
	   			
	   		} else {
	   			errCount++;
	   			boolSeans = false;
	   			mistake.css('display', 'block');
	   			//err = inputValue.length-1;
	   			
	   		};
		};
   };

   function showResults(){  		
   		$('tbody').append('<tr><td>'+$('#userName').val()+'</td><td>'+str.length+'</td><td>'+errCount+'</td><td>'+time+'</td></tr>')
   		$('.results').css('display','block');
	};

});
