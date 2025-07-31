tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#B22222",
        primaryHover: "#C9A14D",
        secondary: "#1E1E1E",
        borderColor: "#7A7A7A",
        textLight: "#E0E0E0",
        textGray: "#7A7A7A",
        bgDark: "#121212",
        accent: "#C9A14D",
        whiteSoft: "#F5F5F5",
      },
    },
  },
};

// Simple form submission handler
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  this.reset();
});

// // Mobile menu toggle (would need more implementation)
// document
//   .querySelector(".md\\:hidden button")
//   .addEventListener("click", function () {
//     alert("Menu mobile seria implementado aqui");
//   });

// Espera o documento HTML ser completamente carregado antes de executar o script.
document.addEventListener("DOMContentLoaded", () => {
  // --- LÓGICA PARA O MENU MOBILE (HAMBÚRGUER) ---

  // Seleciona os elementos do menu mobile pelo ID que definimos no HTML.
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // Verifica se os elementos do menu mobile realmente existem na página.
  if (mobileMenuButton && mobileMenu) {
    // Seleciona os ícones de "hambúrguer" e "X" que estão dentro do botão.
    const openIcon = mobileMenuButton.querySelector("svg:first-of-type");
    const closeIcon = mobileMenuButton.querySelector("svg:last-of-type");

    // Adiciona um "ouvinte" para o evento de clique no botão do menu.
    mobileMenuButton.addEventListener("click", () => {
      // Alterna a classe 'hidden' no menu. Se estiver visível, esconde. Se estiver escondido, mostra.
      mobileMenu.classList.toggle("hidden");

      // Alterna a visibilidade dos ícones "hambúrguer" e "X".
      openIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");

      // Atualiza o atributo 'aria-expanded' para acessibilidade (bom para leitores de tela).
      const isExpanded =
        mobileMenuButton.getAttribute("aria-expanded") === "true";
      mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
    });
  }

  // --- LÓGICA PARA O DROPDOWN DE PERFIL DO USUÁRIO ---

  // Seleciona o botão e o menu dropdown de perfil.
  const userMenuButton = document.getElementById("user-menu-button");
  const userMenu = userMenuButton.nextElementSibling; // O menu é o próximo elemento irmão.

  // Verifica se os elementos do dropdown de perfil existem.
  if (userMenuButton && userMenu) {
    // Adiciona um "ouvinte" para o evento de clique no botão de perfil.
    userMenuButton.addEventListener("click", (event) => {
      // Impede que o clique se propague para outros elementos, como o 'document'.
      event.stopPropagation();
      // Alterna a visibilidade do menu dropdown.
      userMenu.classList.toggle("hidden");
    });

    // Adiciona um "ouvinte" para cliques em qualquer lugar do documento.
    document.addEventListener("click", (event) => {
      // Se o menu estiver visível E o clique foi fora do botão e do menu, esconde o menu.
      if (
        !userMenu.classList.contains("hidden") &&
        !userMenuButton.contains(event.target)
      ) {
        userMenu.classList.add("hidden");
      }
    });
  }
});
