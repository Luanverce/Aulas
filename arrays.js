let jogadores = ['leornado', 'milena', 'bryam']
console.log('lista inicial: ' + jogadores)
console.log(jogadores)
jogadores[2] = 'shay'
console.log(jogadores)

jogadores.push('bryam')
jogadores.push('luan')
jogadores.push('gabriel')
console.log(jogadores)
console.log('Total de jogadores: ' + jogadores.length)

for (let posicao = 0; posicao < jogadores.length; posicao++) {
    console.log('- ' + posicao + ' ' + jogadores[posicao])
}