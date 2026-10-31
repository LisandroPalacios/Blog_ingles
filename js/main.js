const yearTargets = document.querySelectorAll("[data-current-year]");
yearTargets.forEach((target) => {
  target.textContent = String(new Date().getFullYear());
});

const proficiencyInput = document.querySelector("[data-proficiency-input]");
if (proficiencyInput instanceof HTMLInputElement) {
  const storageKey = "english-portfolio-proficiency";
  const status = document.querySelector("[data-proficiency-status]");
  const showStorageError = () => {
    if (status) {
      status.textContent = "This browser blocked local storage, so this value will not be saved.";
    }
  };
  try {
    proficiencyInput.value = localStorage.getItem(storageKey) ?? "";
    proficiencyInput.addEventListener("input", () => {
      try {
        localStorage.setItem(storageKey, proficiencyInput.value);
      } catch (error) {
        console.warn("The proficiency field could not be saved in this browser.", error);
        showStorageError();
      }
    });
  } catch (error) {
    console.warn("The proficiency field could not be saved in this browser.", error);
    showStorageError();
  }
}
