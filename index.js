console.log("file linked");
// var buttons = document.getElementsByClassName('buttons');
var screen = document.getElementById('screen');
// buttons.addEventListener('click', function(){
// 	screen.write(buttons.text);x
// })
var b = document.querySelectorAll('div.buttons');
for (var i = 0; i < b.length; i++) {
	b[i].onclick = function(){ console.log(this.textContent);
		let text = this.textContent;
		console.log(text);
		console.log(this.innerHTML);
		if(text == 'erase'){
			console.log('want to erase');
			 screen.innerHTML = ' ';
		}
		else if(text == '='){
			screen.innerHTML = eval(screen.innerHTML);
		}
		else{
			screen.innerHTML += this.textContent;
		}

		


	};
}