const feedbackForm = document.querySelector(".feedback__form");
feedbackForm.addEventListener("submit", (event) => {
  const nameInput = feedbackForm.querySelector("#name");
  const messageInput = feedbackForm.querySelector("#message");

  if (nameInput.value.trim() === "") {
    alert("Будь ласка, введіть ваше ім’я.");
    event.preventDefault();
    return;
  }

  if (messageInput.value.trim() === "") {
    alert("Будь ласка, введіть ваш відгук.");
    event.preventDefault();
    return;
  }

  alert("Дякуємо за ваш відгук!");
});

const prefooterForm = document.querySelector(".prefooter__form");
prefooterForm.addEventListener("submit", (event) => {
  const emailInput = prefooterForm.querySelector("#email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    alert("Будь ласка, введіть коректний Email.");
    event.preventDefault();
    return;
  }

  alert("Дякуємо за підписку!");
});
