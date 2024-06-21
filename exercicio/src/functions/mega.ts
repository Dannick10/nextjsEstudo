export const mega = (qtde:number = 6, numeros:number[] = []):number[] => {
    if(qtde < 6 && qtde > 60) {
        throw 'quantidade invalida'
    }

    if(numeros.length === qtde) {
        return numeros.sort((n1,n2) => n1- n2)
    }

    const numeroAleatorio:number = Math.floor(Math.random() * 60)
    if(!numeros.includes(numeroAleatorio)) {
        return mega(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega(qtde, numeros)
    }

}