/* eslint-disable */

import assert from 'node:assert/strict';

const nome: string = 'Carlos';
const idade: number = 30;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-symbol');
const big: bigint = 10n;

// arrays
const arraysDeNumeros: number[] = [1, 2, 3];

// Objects
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Carlos',
  idade: 30,
};

// function
function soma(x: number, y: number): number {
  return x + y;
}
assert.equal(soma(2, 2), 4);

// with type (alias)
type somaType = (x: number, y: number) => number;
const soma2: somaType = (x, y) => x + y;
assert.equal(soma2(2, 2), 4);
