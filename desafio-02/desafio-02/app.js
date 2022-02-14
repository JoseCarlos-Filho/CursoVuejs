new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Você esta clicando no botão!!!')
        },
        pegaValor(event) {
            this.valor = event.target.value
        }
    }   
})