let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const delEl = document.getElementById("del-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
} else {
}
delEl.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

//console.log(Boolean(leadsFromLocalStorage));

inputBtn.addEventListener("click", () => {
  console.log("Button Clicked");
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li> 
    <a href = '${myLeads[i]}' target = '_blank'> ${myLeads[i]} <a> 
    </li>`;

    //console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
