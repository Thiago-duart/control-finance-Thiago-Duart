import { valuesCategory } from "./valuesData.js";
import { insertedValues } from "./valuesData.js";
import { SumMoney } from "./helpers.js";
import { filter } from "./helpers.js";

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


function filterExecut() {
  const btnLeave = document.querySelector("#btnLeave");
  const ulMoney = document.querySelector("ul");
  const btnEntry = document.querySelector("#btnEntry");
  const btnAll = document.querySelector("#btnAll");

  btnLeave.addEventListener("click", (e) => {
    ulMoney.innerHTML = "";
    const filtered = filter(insertedValues, e.target.value);

    insertValue(filtered);
    SumMoney(filtered);
  });
  
  btnEntry.addEventListener("click", (e) => {
    ulMoney.innerHTML = "";
    const filtered = filter(insertedValues, e.target.value);

    insertValue(filtered);
    SumMoney(filtered);
  });


  btnAll.addEventListener("click", (e) => {
    ulMoney.innerHTML = "";
    const filtered = insertedValues.filter((e) => e);

    insertValue(filtered);
    SumMoney(filtered);
  });
}


function insertValue(arrayValues) {
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


function insertNewValue(arrayMoney, valueCategory) {
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


function deleteElement(event) {
  const listItem = event.target.closest("li");
  
  if (listItem) {
    const itemId = parseInt(listItem.getAttribute("data-id"));
    listItem.remove();

    const indexes = insertedValues.reduce((acc, element, index) => {
      if (element.id === itemId) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (indexes.length > 0) {
      for (let i = indexes.length - 1; i >= 0; i--) {
        insertedValues.splice(indexes[i], 1);
      }
    }

    SumMoney(insertedValues);
    msgValueRegistered();
  }
}


function openAndCloseModal() {
  const modal = document.querySelector("#modal");
  const btnOpen = document.querySelector(".header__button");
  const iconClose = document.querySelector("#closeModal");
  const btnCancel = document.querySelector("#btnCancel");

  btnOpen.addEventListener("click", (e) => {
    e.preventDefault();
    modal.showModal();
  });
  const close = () => modal.close();
  iconClose.addEventListener("click", close);
  btnCancel.addEventListener("click", close);
}


function createCard(investiments, category) {
  const listMoney = document.createElement("li");
  const valueMoney = document.createElement("p");
  const herocontainer = document.createElement("div");
  const btnFilter = document.createElement("button");
  const iconTrash = document.createElement("img");

  listMoney.setAttribute("class", "money__investments");
  herocontainer.setAttribute("class", "money__hero");
  btnFilter.setAttribute("class", "button__greylow-default");

  listMoney.setAttribute("data-id", investiments.id);
  valueMoney.innerText = `R$ ${investiments.value}`;
  btnFilter.innerHTML = category[investiments.categoryID];
  iconTrash.setAttribute("src", "./src/assets/trash.svg");
  iconTrash.setAttribute("class", "trash");
  herocontainer.append(btnFilter, iconTrash);
  iconTrash.addEventListener("click", deleteElement);

  listMoney.append(valueMoney, herocontainer);
  return listMoney;
}


function msgValueRegistered() {
  const ulMoney = document.querySelector("ul");
  const msgRegistered = document.querySelector("#msgValue");

  if (ulMoney.childElementCount === 0) {
    msgRegistered.style.display = "flex";
  } else {
    msgRegistered.style.display = "none";
  }
}

insertValue(objMoney);
openAndCloseModal();
filterExecut();

/*Bom dia pra que ta corrigindo. queria pedir pra passa um pano pra organicao kk. essa semana foi bem corrida e n deu tempo de pegar o coteudo direito.
sei que eu deveria organizar melhor minhas funcoes. mais realmente nao tive tempo de pegar o conteudo da semana.
*/