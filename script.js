let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Função para exibir o popup
function exibirPopup() {
    // Crie um elemento de div para o popup
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = "O formulário foi enviado com sucesso!"; // Conteúdo do popup
  
    // Adicione o popup ao corpo do documento
    document.body.appendChild(popup);
  
    // Configure um temporizador para remover o popup após alguns segundos (opcional)
    setTimeout(function () {
      document.body.removeChild(popup);
    }, 3000); // O popup será removido após 3 segundos (3000 milissegundos)
  }
  
  // Selecione o formulário com base no ID
  const meuFormulario = document.getElementById("meuFormulario");
  
  // Adicione um ouvinte de eventos ao formulário
  meuFormulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que o formulário seja enviado
    exibirPopup(); // Chama a função para exibir o popup
  });

  