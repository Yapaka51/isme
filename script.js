function goTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function addRec() {
  const input = document.getElementById("newRec");
  const text = input.value.trim();
  if (text !== "") {
    const div = document.createElement("div");
    div.className = "recommendation";
    div.textContent = text;
    document.getElementById("recommendations").appendChild(div);
    alert("ขอบคุณสำหรับคำแนะนำ!");
    input.value = "";
  }
}
