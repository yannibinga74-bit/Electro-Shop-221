
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

const boutons = document.querySelectorAll("button");

boutons.forEach(bouton => {
    bouton.addEventListener("click", () => {
        alert("Produit ajouté au panier (simulation).");
    });
});

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const isOpen = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}


function initProductFilter() {
  const chips = document.querySelectorAll(".chip[data-filter]");
  const cards = document.querySelectorAll(".product-card");

  if (!chips.length || !cards.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      const filter = chip.dataset.filter;

      cards.forEach((card) => {
        const matches = filter === "tous" || card.dataset.category === filter;
        card.style.display = matches ? "" : "none";
      });
    });
  });
}


function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const status = document.querySelector(".form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");

    const nameError = form.querySelector("#name-error");
    const emailError = form.querySelector("#email-error");
    const messageError = form.querySelector("#message-error");

    
    if (nameInput.value.trim().length < 2) {
      nameError.textContent = "Merci d'indiquer votre nom (2 caractères minimum).";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Merci d'indiquer une adresse email valide.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    
    if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Votre message doit contenir au moins 10 caractères.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    if (isValid) {
      status.textContent = "Votre message a bien été envoyé. Merci de nous avoir contactés !";
      status.classList.add("visible", "success");
      form.reset();
    } else {
      status.classList.remove("visible", "success");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initProductFilter();
  initContactForm();
});
