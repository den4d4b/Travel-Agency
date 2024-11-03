function showFormData() {
  document.getElementById("formOutput").style.display = "block";
  document.getElementById("outputName").innerText = "Emri: " + document.getElementById("name").value;
  document.getElementById("outputEmail").innerText = "Email: " + document.getElementById("email").value;
  document.getElementById("outputPhone").innerText = "Numri i Telefonit: " + document.getElementById("phone").value;
  document.getElementById("outputMessage").innerText = "Mesazhi: " + document.getElementById("message").value;
}