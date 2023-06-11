export function SumMoney(money) {
    const sumContainer = document.getElementById("sumMoney");
  
    sumContainer.innerHTML = "";
    const valueMoney = document.createElement("p");
  
    const SumInvestments = money.reduce((c, e) => c + parseFloat(e.value),0);
    valueMoney.innerText = `R$ ${SumInvestments}`;
    sumContainer.append(valueMoney);
  }

  export function filter(money, o) {
    const leave = money.filter((e) => {
      if (e.categoryID == o) {
        return e;
      }
    });
    
    return leave;
  }
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
     
        for (let i = indexes.length - 1; i >= 0; i--) {
          insertedValues.splice(indexes[i], 1);
        }
      }
  
      SumMoney(insertedValues);
      teste()
    }
  }
  