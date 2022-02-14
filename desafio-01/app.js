new Vue({
    el: '#desafio',
    data: {
        nome: 'José Carlos',
        idade: 36,
        imagem: 'https://miro.medium.com/max/1400/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})