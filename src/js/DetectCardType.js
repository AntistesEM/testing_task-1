export function PaySystem() {
  const inputElement = document.querySelector(".input-text");
  if (inputElement) {
    inputElement.addEventListener("input", () => {
      const inputValue = inputElement.value;
      if (inputValue) {
        const firstCharacter = inputValue.charAt(0);
        const icons = document.querySelectorAll("img");
        icons.forEach((image) => {
          image.classList.add("disabled");
        });
        if (firstCharacter === "2") {
          remove(["mir"]);
        } else if (firstCharacter === "4") {
          remove(["visa"]);
        } else if (firstCharacter === "5") {
          remove(["mastercard"]);
        } else if (firstCharacter === "3") {
          if (inputValue.length >= 2) {
            const secondCharacter = inputValue.charAt(1);
            if (secondCharacter === "5") {
              remove(["jcb"]);
            } else if (secondCharacter === "0") {
              remove(["diners"]);
            } else if (secondCharacter === "4" || secondCharacter === "7") {
              remove(["americanexpress"]);
            }
          }
        } else if (firstCharacter === "6") {
          remove(["discover"]);
        }
      }
    });
  }
}

function remove(classes) {
  classes.forEach((className) => {
    const icon = document.querySelector(`.${className}`);
    icon.classList.remove("disabled");
  });
}
