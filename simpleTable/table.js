function createTabJson() {
  console.log("we need to make table on click here.,");
  const data = [
    {
      name: "abc",
      age: 12,
      city: "kanpur",
      email: "vidisha09pandey@gmail.com",
    },
    {
      name: "abc",
      age: 12,
      city: "kanpur",
      email: "vidisha09pandey@gmail.com",
    },
    {
      name: "abc",
      age: 12,
      city: "kanpur",
      email: "vidisha09pandey@gmail.com",
    },
    {
      name: "abc",
      age: 12,
      city: "kanpur",
      email: "vidisha09pandey@gmail.com",
    },
    {
      name: "abc",
      age: 12,
      city: "kanpur",
      email: "vidisha09pandey@gmail.com",
    },
  ];

  let table = `<table>
  <tr>
  <th>name</th>
  <th>age</th>
  <th>city</th><th>email</th>
  </tr>`;

  data.forEach((item) => {
    table += `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.city}</td><td>${item.email}</td></tr>`;
  });
  table += `</table>`;

  let tabelContainer = document.getElementById("tableTab");
  tabelContainer.innerHTML = table;
}

function buildTab(data) {
  let table = `
  <table>
  <tr>
  <th>Name</th>
  <th>email</th>
  <th>phone</th>
  </tr>`;

  data.forEach((item) => {
    table += `<tr><td>${item.name}</td><td>${item.email}</td><td>${item.phone}</td></tr>`;
  });

  table += `</table>`;
  document.getElementById("tableTab").innerHTML = table;
}

async function createTabApi() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(response, data);

    buildTab(data);
  } catch (error) {
    console.log(error);
  }
}

function attachClick() {
  document
    .getElementById("createTable")
    .addEventListener("click", createTabJson);
  document
    .getElementById("createApiTable")
    .addEventListener("click", createTabApi);
}

attachClick();
createTabApi();
