let obj = {}                                  // Objto vazio onde será adicionados os valores não encontrados e seus respectivos índices.
function twoSum (input, target) {
  for (let i = 0; i < input.length; i++) {    // Loop criado para iterar a array de input.
    let numToFind = target - input[i]         // Variável onde será salvo o valor da subtração entre o target e o input na posição atual.

    if (numToFind in obj) {                   // Condição que verifica se a subtração do target e o input na posição atual existe dentro do objeto criado.
      return [obj[numToFind], i]              // Se o valor existe dentro do obj, significa que foram achados os números necessários cuja soma é igual ao target.
    }
    obj[input[i]] = i                         // Caso ainda não exista, o valor do input na posição atual é adicionado junto com seu índice.
  }
}

let nums = [3, 3]
let target = 6
console.log(twoSum(nums, target))
