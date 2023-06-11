
  export function SumMoney(money) {
    const sumContainer = document.getElementById("sumMoney");
  
    sumContainer.innerHTML = "";
    const valueMoney = document.createElement("p");
  
    const SumInvestments = money.reduce((c, e) => c + parseFloat(e.value),0);
    valueMoney.innerText = `R$ ${SumInvestments}`;
    sumContainer.append(valueMoney);
  }
  export function msgValueRegistered() {
    const ulMoney = document.querySelector("ul");
    const msgRegistered = document.querySelector("#msgValue");
  
    if (ulMoney.childElementCount === 0) {
      msgRegistered.style.display = "flex";
    } else {
      msgRegistered.style.display = "none";
    }
  }