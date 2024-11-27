function semRetorno(name: string, ...abc: unknown[]): void {
  console.log(name + ' e ' + abc.join(' '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('carlos', 'Luiz', 'Otávio', 33, ' anos de idade');
pessoa.exibirNome();

export { pessoa };
