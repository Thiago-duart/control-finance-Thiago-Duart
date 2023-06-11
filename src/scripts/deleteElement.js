import { insertedValues } from "./valuesData.js";
import { SumMoney } from "./sumElements.js";
import { msgValueRegistered } from "./sumElements.js";

export function deleteElement(event) {
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
      if (indexes.length > 0) {
        indexes.forEach((index) => {
          insertedValues.splice(index, 1);
        });
      }
    }

    SumMoney(insertedValues);
    msgValueRegistered();
  }
}
