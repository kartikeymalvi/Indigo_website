document.getElementById("submit").addEventListener("click", datashow);

async function datashow() {
  let from = document.getElementById("input1").value;
  let to = document.getElementById("input2").value;
  let departure = document.getElementById("input3").value;
  let ret = document.getElementById("input4").value;
  
      let api="http://localhost:3000/flights"
      

      const response= await fetch(api, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Set content type to JSON
    },
    body: JSON.stringify({
      
      "from":from,
      "to": to,
      "departure": departure,
      "return": ret
    })
   });
    alert(" Flight Booked!!!")
  }
   
  

    