import { valuesCategory } from "./valuesData.js";
import { insertedValues } from "./valuesData.js";
import { SumMoney } from "./sumElements.js";
import { createCard } from "./createCard.js";
import { filterExecut } from "./filters.js";
import { deleteElement } from "./deleteElement.js";
import { openAndCloseModal } from "./modal.js";
import { msgValueRegistered } from "./sumElements.js";

let objMoney = insertedValues;

const btnInsert = document.getElementById("btnInsert");

btnInsert.addEventListener("click", (e) => {
  e.preventDefault();

  const inputMoney = document.getElementById("inputMoney");
  const categoryValue = document.querySelector(
    'input[name="categoryID"]:checked'
  ).value;

  if (inputMoney.value != "") {
    objMoney.splice(0, 0, {
      id: objMoney.length + 1,
      value: parseFloat(inputMoney.value),
      categoryID: parseInt(categoryValue),
    });
  }

  insertNewValue(objMoney, valuesCategory);
  SumMoney(objMoney);
});

export function insertValue(arrayValues) {
  const arrayValue = arrayValues;
  const valueCategory = valuesCategory;

  arrayValue.map((money, e, array) => {
    const moneyList = document.querySelector("#moneyList");
    const trashIcons = document.querySelectorAll(".trash");

    moneyList.appendChild(createCard(money, valueCategory));
    trashIcons.forEach((icon) => {
      icon.addEventListener("click", deleteElement);
    });

    return array;
  });
}

export function insertNewValue(arrayMoney, valueCategory) {
  const card = createCard(arrayMoney[0], valueCategory);
  const ulMoney = document.querySelector("#moneyList");
  const trashIcons = document.querySelectorAll(".trash");

  ulMoney.append(card);
  trashIcons.forEach((icon) => {
    icon.addEventListener("click", deleteElement);
  });

  modal.close();
  msgValueRegistered();
}

insertValue(objMoney);
openAndCloseModal();
filterExecut();
