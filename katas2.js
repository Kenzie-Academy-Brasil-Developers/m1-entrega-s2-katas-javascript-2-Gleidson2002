// comece a criar a sua função add na linha abaixo
function add(a,b){
    return a+b
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
    let result = 0
    for(let i=0;i<b;i++){
    result = add(result,a)}

    
    return result
}
// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a,b){
    let valor = a
    for(let i=1; i<b;i++){
        valor = multiply(a,valor)
    }
    return (valor)

}
// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a){
    result = a
    
    for(i=1;i<a;i++){
        
        result = multiply(i,result)

    }
    return result


}
function subtrai(a,b){
    return a-b
}


// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
//f=F(a-1)+f(a-2)
//
function fibonacci(a){
    if (a === 0||a === 1){
        return a;
    } else {
        let result = add(fibonacci(subtrai(a,1)),fibonacci(subtrai(a,2)) )
          
            
            return result
    }
} 
        



console.log(fibonacci(7))

// descomente a linha seguinte para testar sua função
 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
