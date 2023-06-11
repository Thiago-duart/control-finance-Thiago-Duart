
import { deleteElement} from "./deleteElement.js";


export function createCard(investiments, category) {
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