import { insertedValues } from "./valuesData.js";
import { SumMoney } from "./sumElements.js";
import { insertValue } from "./main.js";

export function filterExecut() {
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
export function filter(money, o) {
  const leave = money.filter((e) => {
    if (e.categoryID == o) {
      return e;
    }
  });

  return leave;
}
