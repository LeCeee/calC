console.log("file linked");
// var buttons = document.getElementsByClassName('buttons');
var screen = document.getElementById('screen');
// buttons.addEventListener('click', function(){
// 	screen.write(buttons.text);x
// })
screen.value="0";
var b = document.querySelectorAll('div.buttons');
for (let i = 0; i < b.length; i++) {
	b[i].onclick = function(){
			
		let text = this.querySelector('p').innerHTML;
		console.log(this);
		console.log(this.children[0].innerHTML);
		console.log(this.querySelector('p').innerHTML);
		if(text == 'AC'){
			console.log('want to erase');
			 screen.value = "0";
		}
		else if(text == '='){
			screen.value = eval(screen.value);
		}
		else{
			if(screen.value=="0"){
				screen.value = this.textContent;
			}
			else{
				screen.value += this.textContent;
			}
		}
		
		
	};
}

