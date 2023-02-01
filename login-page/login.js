
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();


 const data = {
    name : document.querySelector("#name").value,
   surname : document.querySelector("#surname").value,
   email :  document.querySelector("#email").value,
   password : document.querySelector("#password").value,
 }
 

  const table = document.querySelector("table");
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);

  cell1.innerHTML = data.name;
  cell2.innerHTML = data.surname;
  cell3.innerHTML = data.email;
  cell4.innerHTML = data.password;
});
