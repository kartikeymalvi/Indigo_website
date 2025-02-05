


function myDel(id) {
  let api = `http://localhost:3000/flights/${id}`;
  fetch(api, { method: "DELETE" }).then((res) => {
    alert("Record Deleted!!!");
  });
}

function saveRow(id) {
  let myemp = document.getElementById(`input1-${id}`);
  let myName = document.getElementById(`input2-${id}`);
  let mycity = document.getElementById(`input3-${id}`);
  let mysalary = document.getElementById(`input4-${id}`);

  // ✅ Check if elements exist before accessing value
  if (!myemp || !myName || !mycity || !mysalary) {
    alert("Error: Some input fields are missing!");
    return;
  }

  let url = `http://localhost:3000/flights/${id}`;
  fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      from: myemp.value,
      to: myName.value,
      departure: mycity.value,
      return: mysalary.value,
    }),
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Data updated successfully");
        dataShow(); 
      } else {
        throw new Error("Error while updating");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}


function editRow(id) {
 
  let inputs = document.querySelectorAll(
    `#input1-${id}, #input2-${id}, #input3-${id}, #input4-${id}`
  );

 
  inputs.forEach((input) => {
    input.removeAttribute("readonly");
    input.style.border = "1px solid black"; 
  });

  
  document.getElementById(`edit-${id}`).style.display = "none";
  document.getElementById(`save-${id}`).style.display = "inline";
}



async function dataShow() {
  const api = "http://localhost:3000/flights";
  let table = `<table border="1" width="100%" align="center">
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Departure</th>
                        <th>Return</th>
                        <th>Actions</th>
                    </tr>`;

  const response = await fetch(api);
  const data = await response.json();

  data.map((item) => {
    table += `<tr>
                <td align="center">
                  <input type="text" id="input1-${item.id}" value="${item.from}" readonly>
                </td>
                <td align="center">
                  <input type="text" id="input2-${item.id}" value="${item.to}" readonly>
                </td>
                <td align="center">
                  <input type="text" id="input3-${item.id}" value="${item.departure}" readonly>
                </td>
                <td align="center">
                  <input type="text" id="input4-${item.id}" value="${item.return}" readonly>
                </td>
                <td align="center">
                  <button onclick="editRow('${item.id}')" id="edit-${item.id}" class="button button-edit">Edit</button>
                  <button onclick="saveRow('${item.id}')" id="save-${item.id}" class="button button-save" style="display:none">Save</button>
                  <button onclick="myDel(${item.id})">Delete</button>
                </td>
              </tr>`;
  });

  table += "</table>";
  document.getElementById("demo").innerHTML = table;
}




dataShow();

// --------------------------search-----------------------------

document.getElementById("btn1").addEventListener("click", mySearch);
async function mySearch() {
  let from = document.getElementById("from").value;
  let api = `http://localhost:3000/flights/?from=${from}`;
  const myObj = await fetch(api);
  const Data = await myObj.json();
  let TAB = `<table border="1"  width="100%" >
              <tr>
                
                <th> from </th>
                <th> to </th>
                <th> departure </th>
                <th> Return</th>
                
              </tr>  
             `;
  Data.map((key) => {
    TAB += `
                 <tr>
                 
                 <td>${key.from}</td>
                 <td>${key.to}</td>
                 <td>${key.departure}</td>
                 <td>${key.return}</td>
                </tr> 
                
              `;
  });
  TAB += "</table>";
  document.getElementById("demo").innerHTML = TAB;
}

