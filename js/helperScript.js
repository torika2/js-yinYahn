let counter = 0;
function showOrHideFormDiv(buttonData){
	let showOrHideFormDiv = document.getElementById('formDiv');
	(counter===0) ? counter+=1 : counter-=1;
	let emptyString = '';
	counter ? buttonData.innerText='Hide' : buttonData.innerText='Show';
	(counter%2 === 1) ? emptyString = 'visible' : emptyString = 'hidden';
	showOrHideFormDiv.style.visibility=emptyString;
}