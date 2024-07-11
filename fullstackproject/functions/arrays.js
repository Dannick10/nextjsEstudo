export function embaralhar(elementos) {
    return elementos
    .map(valor => ({ valor, aleaatorio: Math.random()}))
    .sort((obj1,obj2) => obj1.aleaatorio - obj2.aleaatorio)
    .map(obj => obj.valor)
}