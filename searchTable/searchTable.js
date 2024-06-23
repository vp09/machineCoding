document.getElementById("searchTab").addEventListener("keyup", function () {
  let tabData = searchTab(event.target.value, data);
  buildTab(tabData);
});

function searchTab(value, data) {
  let filteredData = [];
  // console.log(value, data);
  data.forEach((item) => {
    let name = item.name;
    // console.log(item.name);
    if (name.includes(value)) {
      filteredData.push(data);
    }
    console.log(filteredData);
  });
}
