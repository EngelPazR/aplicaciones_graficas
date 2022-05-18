const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')


targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
        
        if(t.id=='visa'){
            targets[0].src = '../img/cib_cc-mastercard.png'
            targets[1].src = '../img/uim_paypal.png'
            targets[2].src = '../img/logos_visa.png'
        }
        if(t.id=='paypal'){
            targets[0].src = '../img/cib_cc-mastercard.png'
            targets[1].src = '../img/logos_paypal.png'
            targets[2].src = '../img/bxl_visa.png'
        }
        if(t.id=='mastercard'){
            targets[0].src = '../img/logos_mastercard.png'
            targets[1].src = '../img/uim_paypal.png'
            targets[2].src = '../img/bxl_visa.png'
        }
	})
})