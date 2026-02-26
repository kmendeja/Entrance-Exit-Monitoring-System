document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.getElementById("logoutBtn");
    const logoutModal = document.getElementById("logoutModal");
    const cancelLogout = document.getElementById("cancelLogout");
    const confirmLogout = document.getElementById("confirmLogout");

    if (!logoutBtn) return; // safety check

    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        logoutModal.classList.add("active");
    });

    cancelLogout.addEventListener("click", function () {
        logoutModal.classList.remove("active");
    });

    confirmLogout.addEventListener("click", function () {
        window.location.href = "../server/loginpage.html";
    });

    // close when clicking outside modal box
    logoutModal.addEventListener("click", function (e) {
        if (e.target === logoutModal) {
            logoutModal.classList.remove("active");
        }
    });

});