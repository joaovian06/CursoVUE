function Exemplo() {
  this.nome = 'joao';

  const teste = () => {
    let arrayNome = new Array(10).fill(null).map(() => {
      return this.nome;
    });
    console.log(arrayNome);
  };


  return { teste };
}

let ex = new Exemplo();
ex.teste();