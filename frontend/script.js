// Sistema de login: redireciona para dashboard ao confirmar Gmail válido
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user.endsWith("@gmail.com") && pass.trim() !== "") {
      window.location.href = "dashboard.html";
    } else {
      alert("Use um Gmail válido e digite a senha!");
    }
  });
}
// ...existing code...

// Produtos por categoria
const produtos = {
  acougue: ["Carne bovina", "Frango", "Linguiça", "Costela"],
  limpeza: ["Detergente", "Desinfetante", "Sabão em pó", "Água sanitária"],
  padaria: ["Pão francês", "Bolo", "Croissant", "Rosca"],
  bebidas: ["Refrigerante", "Suco", "Água", "Cerveja"]
};

// Exibe/oculta submenu de categorias
const btnCategorias = document.getElementById("btn-categorias");
const submenu = document.getElementById("submenu-categorias");
btnCategorias.addEventListener("click", function() {
  submenu.style.display = submenu.style.display === "none" ? "block" : "none";
});

// Exibe produtos da categoria selecionada
const categoriaBtns = document.querySelectorAll(".categoria-btn");
const produtosDiv = document.getElementById("produtos-categoria");
categoriaBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const categoria = btn.getAttribute("data-categoria");
    const lista = produtos[categoria] || [];
    produtosDiv.innerHTML = `<h2>Produtos de ${btn.textContent}</h2>` +
      (lista.length ? `<ul>${lista.map(p => `<li>${p}</li>`).join("")}</ul>` : "<p>Nenhum produto cadastrado.</p>");
  });
});
