function saveData(){
  let name = sessionStorage.getItem("pname");
  let age = sessionStorage.getItem("age");
  let gender = sessionStorage.getItem("gender");
  let blood = sessionStorage.getItem("blood");

  let disease = document.getElementById("disease").value;
  let v1 = document.getElementById("value1").value;
  let v2 = document.getElementById("value2").value;

  let out = document.getElementById("output");

  if(!disease){
    out.innerHTML = "<p class='danger'>Please select a disease.</p>";
    return;
  }

  let html = `<h3>Patient Details</h3>
              <p><b>Name:</b> ${name}</p>
              <p><b>Age:</b> ${age}</p>
              <p><b>Gender:</b> ${gender}</p>
              <p><b>Blood Group:</b> ${blood}</p>
              <h3>Disease / Health Analysis</h3>`;

  if(disease==="diabetes"){
    if(v1>180) html+= `<p class="danger">High Blood Sugar – Avoid sweets, exercise, consult doctor</p>`;
    else if(v1<70) html+= `<p class="warning">Low Blood Sugar – Take glucose, eat small meals</p>`;
    else html+= `<p class="normal">Normal Blood Sugar – Maintain healthy diet & exercise</p>`;
  } else if(disease==="bp"){
    if(v1>=140 || v2>=90) html+= `<p class="danger">High BP – Reduce salt, manage stress, exercise</p>`;
    else if(v1<90 || v2<60) html+= `<p class="warning">Low BP – Drink fluids, eat balanced meals</p>`;
    else html+= `<p class="normal">Normal BP – Maintain healthy lifestyle</p>`;
  } else if(disease==="obesity"){
    if(v1 && v2){
      let bmi = v1/(v2*v2);
      if(bmi>=25) html+= `<p class="danger">BMI: ${bmi.toFixed(2)} (Overweight/Obese) – Reduce calories, exercise</p>`;
      else if(bmi<18.5) html+= `<p class="warning">BMI: ${bmi.toFixed(2)} (Underweight) – Increase nutrients, protein diet</p>`;
      else html+= `<p class="normal">BMI: ${bmi.toFixed(2)} (Normal) – Maintain healthy lifestyle</p>`;
    } else html+= `<p class="warning">Enter weight & height to calculate BMI.</p>`;
  } else if(disease==="anemia"){
    html+= `<p class="warning">Anemia – Eat iron-rich foods, vitamins, monitor blood</p>`;
  } else if(disease==="asthma"){
    html+= `<p class="warning">Asthma – Avoid triggers, use inhaler, consult doctor</p>`;
  }

  html+= `<p class="normal"><b>Data saved successfully!</b></p>`;
  out.innerHTML = html;
}

function cancelData(){
  document.getElementById("disease").value="";
  document.getElementById("value1").value="";
  document.getElementById("value2").value="";
  document.getElementById("output").innerHTML="<p class='warning'>All fields cleared.</p>";
}
function exitPage(){
  // Clear session data
  sessionStorage.clear();
  // Go to exit page
  window.location.href = "exit.html";
}
