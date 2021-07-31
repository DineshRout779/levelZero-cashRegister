const billInput = document.querySelector("#bill");
const cashInput = document.querySelector("#cash");
const cashGroup = document.querySelector("#cash-group");
const checkBtn = document.querySelector("#check-btn");
const payBtn = document.querySelector("#pay-btn");
const table = document.querySelector("table");

const notes = [
  { note: 500, number: 1 },
  { note: 200, number: 2 },
  { note: 100, number: 1 },
  { note: 50, number: 3 },
  { note: 20, number: 5 },
  { note: 10, number: 0 },
  { note: 5, number: 2 },
  { note: 1, number: 1 },
];

checkBtn.addEventListener("click", () => {
  if (
    billInput.value === "" ||
    isNaN(billInput.value) ||
    billInput.value <= 0
  ) {
    console.log("enter valid amount");
  } else {
    cashGroup.classList.add("open");
    cashInput.focus();
  }
});

payBtn.addEventListener("click", () => {
  if (cashInput.value === "" || isNaN(cashInput.value)) {
    console.log("enter amount");
  } else {
    const retrunValue = cashInput.value - billInput.value;
    if (retrunValue > 0) {
      console.log(`Return cash is ${retrunValue}`);
      table.style.visibility = "visible";
      createTable(notes);
    } else if (retrunValue === 0) {
      console.log(`No cash to be returned`);
    } else {
      alert(`cash value should be more than or equal to bill amount`);
    }
  }
});

window.addEventListener("load", () => {
  billInput.focus();
});

const createTable = (data) => {
  //   console.log(data);
  const tableRow = `
        ${data
          .map(
            (d, i) => `
            <tr>
                <td>${d.note}</td>
                <td>${d.number}</td>
            </tr>
            `
          )
          .join(" ")}
    `;
  //   console.log(tableRow);
  table.innerHTML += tableRow;
};
