/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const { TestScheduler } = require("jest");
const numbers = require("../src/numbers");

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe("2 - Implemente os casos de teste para a função `numbers`", () => {
  it("Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário", () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  });
  test("verificar se um teste que a função receba [1, 2, 3(em string), 4, 5] retorne falso", () => {
    expect(numbers([1, 2, "3", 4, 5])).toBeFalsy();
  });
  test("verificar se um teste em que a função receba [1,a,3] retorne falso", () => {
    expect(numbers([1, "a", 3])).toBeFalsy();
  });
  test("verificar se um teste em que a função recebe [] e retorne false", () => {
    expect(numbers([""])).toBeFalsy();
  });
});
// Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
// Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
// Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
// Escreva um teste em que a função recebe [' '] e retorna false
