let screen= document.getElementById('screen');

//on click
buttons = document.querySelectorAll('button');

// screenVlaue=string
// screen.Value = var
let screenValue = '';
for(item of buttons) {
	item.addEventListener('click', (e)=>{
		buttonText = e.target.innerText;
		console.log('Button text is ', buttonText);
		if(buttonText=='X'){
			//change X value into "*""
			buttonText = '*';
			screenValue += buttonText;
			screen.value = screenValue;
		}
		// when we click on C then result = null
		else if (buttonText =='C'){
			screenValue = "";
			screen.value = screenValue;
		}
		else if (buttonText =='='){
             screen.value = eval(screenValue);
		}
		else{
			screenValue += buttonText;
			screen.value = screenValue;
		}
	})
}