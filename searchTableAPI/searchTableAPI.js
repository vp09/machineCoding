const data = [
  {
    name: "abc",
    age: 12,
    city: "kanpur",
    email: "vidisha09pandey@gmail.com",
  },
  {
    name: "def",
    age: 12,
    city: "kanpur",
    email: "vidisha09pandey@gmail.com",
  },
  {
    name: "fea",
    age: 12,
    city: "kanpur",
    email: "vidisha09pandey@gmail.com",
  },
  {
    name: "cdf",
    age: 12,
    city: "kanpur",
    email: "vidisha09pandey@gmail.com",
  },
  {
    name: "rae",
    age: 12,
    city: "kanpur",
    email: "vidisha09pandey@gmail.com",
  },
];

document.getElementById("searchTab").addEventListener("keyup", function () {
  let searchVal = event.target.value;
  let tabData = searchTab(searchVal, data);
  createTable(tabData);
});

createTable(data);

function createTable(data) {
  let table = `<table>
    <tr>
    <th>name</th>
    <th>age</th>
    <th>city</th><th>email</th>
    </tr>`;

  for (let i = 0; i < data.length; i++) {
    table += `<tr><td>${data[i].name}</td><td>${data[i].age}</td><td>${data[i].city}</td><td>${data[i].email}</td></tr>`;
  }
  table += `</table>`;

  let tabelContainer = document.getElementById("tableTab");
  tabelContainer.innerHTML = table;
}

function searchTab(value, arr) {
  let filteredData = [];
  value = value.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.includes(value)) {
      filteredData.push(arr[i]);
    }
  }

  return filteredData;
}
