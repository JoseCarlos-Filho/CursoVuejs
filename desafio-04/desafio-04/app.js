new Vue({
	el: '#desafio',
	data: {
		classeEfeitos: 'destaque',
		boleano: true,
		entradaClasse: '',
		boleanoUser: '',
		corUser: '',
		estiloUser:{
			width: '120',
			height: '120',
		},
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval( () => {
				this.classeEfeitos = this.classeEfeitos == 'destaque'
				? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 600)
		},

		mudaForma(event) {
			if(event.target.value == "true") {
				this.boleano = true 
			}else if(event.target.value == "false"){
				this.boleano = false
			}
		
		}
	}
})
