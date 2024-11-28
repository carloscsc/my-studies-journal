const A: {
  chaveA: string;
  chaveB: string;
  readonly [key: string]: string; // generic object
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

A.chaveC = 'Nova chave';

console.log(A.chaveA);
console.log(A.chaveC);
