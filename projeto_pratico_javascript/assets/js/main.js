const databaseService = DatabaseService('clientes');

var editando;

document.addEventListener('keydown', function(event) {
  
  const input = document.getElementById('input-novo');
  if(event.key == 'Enter' && input.value.trim() != '') {
    let item = {
      id: new Date().getTime(),
      name: input.value
    }

    addItem(item);
    createLi(item);
    input.value = null;
  }
});

function addItem(item) {
  databaseService.save(item);
}

function deleteItem(item) {
  let li = document.getElementById(`cliente-${item.id}`);
  li.remove();
  databaseService.deleteItem(item);
}

// function editarItem(item) {
//   console.log(item);
//   let editar = document.getElementById('editar')
// }

function showEditItem(item) {
  editando = item;
  let editar = document.getElementById('editar');
  let inputEditar = document.getElementById('input-editar');

  editar.classList.remove('hidden');
  inputEditar.value = item.name;
}

function editItem() {
  let inputEditar = document.getElementById('input-editar');
  editando.name = inputEditar.value;
  let li = document.getElementById('cliente-' + editando.id);
  li.firstElementChild.innerHTML = editando.name;
  databaseService.updateItem(editando);
  console.log(editando);

  let editar = document.getElementById('editar');

  inputEditar.value = null;
  editar.classList.add('hidden');
}

function createLi(item) {
  let ul = document.getElementById('tarefas');
  let li = document.createElement('li');
  li.className = 'collection-item';
  li.id = `cliente-${item.id}`;
  li.innerHTML =
  `
    <span>${item.name}</span>
    <div class="secondary-content">
      <i onclick='showEditItem(${JSON.stringify(item)})' class="material-icons blue-text">create</i>
      <i onclick='deleteItem(${JSON.stringify(item)})' class="material-icons red-text">do_not_disturb_on</i>
    </a>
  `;

  ul.appendChild(li);
}

function createElements() {
  let lista = databaseService.get();
  lista.forEach((valor, index, array) => {
    createLi(valor);
  });
}

createElements();