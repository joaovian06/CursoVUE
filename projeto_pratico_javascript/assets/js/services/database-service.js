function DatabaseService(origin) {

  const get = function()
  {
    let lista = localStorage.getItem(origin);
    let dados = JSON.parse(lista);
    return dados;
  }

  return { get }
}