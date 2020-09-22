try {
	window.addEventListener('load', function () {
		// FOOD
			let foodDiv = (document.getElementById('yinYahnFood'))? document.getElementById('yinYahnFood') : foodDivRespawn();		
		// 
		// GameBox Size
				let width = document.getElementById('widthInput').value;
				let height = document.getElementById('heightInput').value;
				let widthInputValue = (width%10 === 0 && width > 30)? document.getElementById('widthInput').value : 830;
				let heightInputValue = (height%10 === 0 && height > 30)? document.getElementById('heightInput').value : 830;
				let	gameBoxWidth = (widthInputValue > 0) ? widthInputValue : 830;
				let	gameBoxHeight = (heightInputValue > 0 ) ? heightInputValue : 830;

				let gameBox = document.getElementById('gameBox');
				gameBox.style.width = `${gameBoxWidth}px`;
				gameBox.style.height = `${gameBoxHeight}px`;
		// ^

		//Yin & Yahn Div 
			let divMarginX = 0;
			let divMarginY = 0;
			let divStep = 10;	

			let yinYahnDiv = document.getElementById('yinYahnDiv');
			
			let gameDivMarginX = yinYahnDiv.style.marginLeft;
			yinYahnDivMovement(divMarginX ,divMarginY , yinYahnDiv, divStep, gameBoxWidth, gameBoxHeight, foodDiv);	
			document.getElementById('yinYahnFood')? score(divMarginX, divMarginY) : null;
		// ^
	function yinYahnDivMovement(divMarginX ,divMarginY , yinYahnDiv, divStep, gameBoxWidth, gameBoxHeight, foodDiv) {
			
		document.querySelector('#gameBody').addEventListener('keydown',function(e){
				console.log(e.key);
				if (e.key === 'd' && divMarginX < (gameBoxWidth-30) || e.key === 'ArrowRight' && divMarginX < (gameBoxWidth-30)) {
					divMarginX += divStep;
					yinYahnDiv.style.marginLeft = `${divMarginX}px`;
				}else if(e.key === 'a' || e.key === 'ArrowLeft'){
					if (divMarginX >= divStep && divMarginX !== 0) {
						divMarginX -= divStep;
						yinYahnDiv.style.marginLeft = `${divMarginX}px`;
					}
				}else if(e.key === 's' && divMarginY < (gameBoxHeight-30) || e.key === 'ArrowDown' && divMarginY < (gameBoxHeight-30)){
					divMarginY += divStep;
					yinYahnDiv.style.marginTop = `${divMarginY}px`;
				}else if(e.key === 'w' && divMarginY !== 0 || e.key === 'ArrowUp' && divMarginY !== 0){
					divMarginY -= divStep;
					yinYahnDiv.style.marginTop = `${divMarginY}px`;
				}
				setTimeout(function(){
					score(divMarginX, divMarginY, foodDiv);
				},5000);
			// console.log(e.key);
		});
	}

	function foodDivRespawn() {
		let gameBox = document.getElementById('gameBox');
		let node = document.createElement("div");
		node.setAttribute('id','yinYahnFood'); 
		node.setAttribute('class','yinYahnFood');
		gameBox.appendChild(node);
		foodDiv.style.visibility = 'visible';	
		foodDiv.style.marginLeft = `${Math.floor(Math.random() * (width-30))}px`
		foodDiv.style.marginTop = `${Math.floor(Math.random() * (height-30))}px`
	}

	function score(divMarginX ,divMarginY, foodDiv) {
		let counter = 0;
		let foodDivMarginLeft = foodDiv.style.marginLeft;
		let foodDivMarginTop = foodDiv.style.marginTop;

		let x = divMarginX >= (parseInt(foodDivMarginLeft)-15);
		let y = divMarginY >= (parseInt(foodDivMarginTop)-15);
		if (x || y) {
			console.log('done');
			foodDiv.remove();
			counter+=1;
			divMarginX = 0;
			divMarginY = 0;
		}
	}

	setInterval(function(){
		foodDivRespawn();
	},5000);

	});
} catch(e) {
	console.log(e);
}