
	const resetButton = document.getElementById('reset-button');

function check(customTip){
	
	let inputBill = Number(document.getElementById('number-bill').value);
	let inputCustom = Number(document.getElementById('number-custom').value);
	let inputPeople = Number(document.getElementById('number-person').value);
	const tips = document.getElementsByClassName('button-tips');
		let finalTip;
		resetButton.disabled = false;
		document.getElementById('reset-button').classList.add('reset-button-active')

		function clear(){
			for (i=0; i<tips.length; i++){
				tips[i].classList.remove('active')
			}
		}
		function tipActive(finalTip){
			inputCustom = finalTip;
			let avg = `avg_${finalTip}`;
			document.getElementById(avg).classList.add('active')
		}
		if (inputCustom == '' || inputCustom == 0){
			if(customTip == '' || customTip == 0){
				clear();
				finalTip = 5;
				tipActive(finalTip);
			} else {
				clear();
				finalTip = customTip;
				tipActive(finalTip);
			}
		} else {
			if(customTip == '' || customTip == 0){
				clear();
				inputCustom = inputCustom;
			} else {
				clear();
				document.getElementById('number-custom').value = ('');
				finalTip = customTip;
				tipActive(finalTip);
			}
		}

		if(inputPeople == '' || inputPeople == 0){
			const tipAmount = document.getElementById("tip-amount")
			const total = document.getElementById("total")
			tipAmount.innerText = (`$0.00`)
			total.innerText = (`$0.00`)
			document.getElementById('people-number-error').classList.remove('people-number-error')
			document.getElementById('people-number-error').classList.add('people-number-error-zero')
			document.getElementById('number-person').classList.add('people-input-error')
		} else {
			document.getElementById('number-person').classList.remove('people-input-error')
			document.getElementById('people-number-error').classList.remove('people-number-error-zero')
			document.getElementById('people-number-error').classList.add('people-number-error')
			const totalTip = ((inputBill * inputCustom)/100)/ inputPeople;
			const totalPrice =  (inputBill+ (inputBill * inputCustom)/100)/ inputPeople;
			const tipAmount = document.getElementById("tip-amount")
			const total = document.getElementById("total")
			tipAmount.innerText = (`$${totalTip.toFixed(2)}`)
			total.innerText = (`$${totalPrice.toFixed(2)}`)
		}
	}


	resetButton.addEventListener('click', () => {
		resetButton.disabled = true;
		const inputBill = document.getElementById('number-bill');
		inputBill.value = ('')
		const inputCustom = document.getElementById('number-custom');
		inputCustom.value = ('')
		const inputPeople = document.getElementById('number-person');
		inputPeople.value = ('')
		const tips = document.getElementsByClassName('button-tips');
		for (i=0; i<tips.length; i++){
			tips[i].classList.remove('active')
		}
		const tipAmount = document.getElementById("tip-amount")
		const total = document.getElementById("total")
		tipAmount.innerText = (`$0.00`)
		total.innerText = (`$0.00`)
		document.getElementById('reset-button').classList.remove('reset-button-active')
		document.getElementById('reset-button').classList.add('reset-button-desactive')
		document.getElementById('number-person').classList.remove('people-input-error')
		document.getElementById('people-number-error').classList.remove('people-number-error-zero')
		document.getElementById('people-number-error').classList.add('people-number-error')
	})

