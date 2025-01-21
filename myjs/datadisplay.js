async function dataShow() {
  const api = "http://localhost:3000/flights";
  let table = `<table border="1" width="100%" align="center">
                    <tr>
                        
                      
                        <th>From</th>
                        <th>To</th>
                        <th>Departure</th>
                        <th>Return</th>
                        
                      
                        

                    </tr>`;

  const response = await fetch(api);

  const data = await response.json();
  // console.log(data);

  data.map((item) => {
    table += `<tr>
                        
                        <td align="center">${item.from}</td>
                        <td align="center">${item.to}</td>
                        <td align="center">${item.departure}</td>
                        <td align="center">${item.return}</td>
                       
                       
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
