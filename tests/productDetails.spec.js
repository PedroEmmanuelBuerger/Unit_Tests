const { TestScheduler } = require("jest");
const productDetails = require("../src/productDetails");
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
  test("verifica se productDetails é uma função", () => {
    expect(typeof productDetails).toBe("function");
  });
  test("verifica se o retorno da função é um array", () => {
    const retorno = productDetails("arroz", "feijão");
    const validar = Array.isArray(retorno);
    expect(validar).toBeTruthy();
  });
  test("verificar se o array retornado pela fun~ao possui 2 itens", () => {
    expect(productDetails("arroz", "feijão").length).toBe(2);
  });
  test("verificar se os dois itens dentro do array retornado pela função são objetos", () => {
    for (let valores of productDetails("arroz", "feijão")) {
      expect(typeof valores).toBe("object");
    }
  });
  test("verifica se quando os parametros são diferentes, os resultados tambem são", () => {
    const retorno = productDetails("arroz", "feijão");
    const valor1 = retorno[0];
    const valor2 = retorno[1];
    expect(valor1.name !== valor2.name && valor1.details.productId !== valor2.details.productId).toBeTruthy();
  });
  test('verifica se o id de ambos os produtos terminam com 123', () =>{
    const retorno = productDetails('arroz', 'arroz');
    const valor1 = retorno[0].details.productId;
    const valor2 = retorno[1].details.productId;
    const validarValor1 = valor1.endsWith('123');
    const validarValor2 = valor2.endsWith('123');
    expect(validarValor1 && validarValor2).toBeTruthy()
  })
});
