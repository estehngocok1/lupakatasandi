document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let inputField = document.getElementById("inputField").value;

    if (!inputField) {
        alert("⚠️ Harap isi kolom di atas.");
        return;
    }

    // Arahkan langsung ke halaman reset kata sandi
    window.location.href = "reset.html";
});