var grid = 16;
var color = 'red';
var mouse = false;
var rand = false;

$(document).ready(function(){
	generate();
	draw();

	$('.btn').click(function(){
		switch(this.id){
			case 'clear': clearing();break;
			case 'resize': resize();break;
			case 'erase': color = 'lightblue';rand = false;break;
			case 'randomColor': rand = true;break;
			case 'redColor': color = 'red';rand = false;break;
			case 'blueColor': color = 'blue';rand = false;break;
			case 'greenColor': color = 'green';rand = false;break;
		}
	});
});

function generate(){
	for(var i=0 ; i<grid ; i++){
		for(var j=0 ; j<grid ; j++){
			$('#container').append("<div class='square'></div>");
		}
		$('#container').append("<br>");
	}
}

function draw(){
	mouseCondition();
	$('.square').hover(function(){
		if(mouse == true && rand == false)
			$(this).css('background-color', color);
		else if(mouse == true && rand == true)
			$(this).css('background-color', randomColor());
	});
}

function mouseCondition(){
	$('#container').mousedown(function(){
		mouse = true;
	});

	$('#container').mouseup(function(){
		mouse = false;
	});
}

function randomColor(){
	var a = "0123456789ABCDEF";
	var col = '#';
	for(var i=0 ; i<6 ; i++){
		col += a[Math.floor(Math.random()*16)];
	}
	return col;
}

function clearing(){
	$('.square').css('background-color', 'lightblue');
}

function resize(){
	do{
		grid = prompt("Input a number [5-80]:");
	}while(grid > 80 || grid < 5);
	$('#container').empty();
	generate();
	draw();
}