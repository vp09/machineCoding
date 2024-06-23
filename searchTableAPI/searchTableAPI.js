async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  document.getElementById("searchTab").addEventListener("keyup", function () {
    let searchVal = event.target.value;
    console.log(searchVal);
    let tabData = searchTab(searchVal, data);
    createTable(tabData);
  });

  createTable(data);
}
function createTable(data) {
  let table = `<table>
    <tr>
    <th>Name</th>
  <th>email</th>
  <th>phone</th>
    </tr>`;

  for (let i = 0; i < data.length; i++) {
    table += `<tr><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].phone}</td></tr>`;
  }
  table += `</table>`;

  let tabelContainer = document.getElementById("tableTab");
  tabelContainer.innerHTML = table;
}

function searchTab(value, arr) {
  let filteredData = [];
  value = value.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name, value);
    if (arr[i].name.includes(value)) {
      filteredData.push(arr[i]);
    }
  }

  return filteredData;
}
getData();
