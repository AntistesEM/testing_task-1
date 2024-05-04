export function PaySystem() {
  const inputElement = document.querySelector(".input-text");
  if (inputElement) {
    inputElement.addEventListener("input", () => {
      const inputValue = inputElement.value;
      if (inputValue) {
        const icons = document.querySelectorAll("img");
        icons.forEach((image) => {
          image.classList.add("disabled");
        });
        checkPaySystem(inputValue);
      }
    });
  }
}

export function checkPaySystem(inputValue) {
  const firstCharacter = inputValue.charAt(0);
  let result = null;
  if (firstCharacter === "2") {
    result = ["mir"];
  } else if (firstCharacter === "4") {
    result = ["visa"];
  } else if (firstCharacter === "5") {
    result = ["mastercard"];
  } else if (firstCharacter === "3") {
    if (inputValue.length >= 2) {
      const secondCharacter = inputValue.charAt(1);
      if (secondCharacter === "5") {
        result = ["jcb"];
      } else if (secondCharacter === "0") {
        result = ["diners"];
      } else if (secondCharacter === "4" || secondCharacter === "7") {
        result = ["americanexpress"];
      }
    }
  } else if (firstCharacter === "6") {
    result = ["discover"];
  }

  if (result !== null) {
    result.forEach((className) => {
      const icon = document.getElementsByClassName(className);
      if (icon.classList) {
        icon.classList.remove("disabled");
      }
    });
  }

  return result;
}
