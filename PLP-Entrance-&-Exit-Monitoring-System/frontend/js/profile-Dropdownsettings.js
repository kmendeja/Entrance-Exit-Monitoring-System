// PROFILE DROPDOWN TOGGLE
   document.addEventListener('DOMContentLoaded', function () {
    const profileToggle = document.getElementById('profileToggle');
    const profileMenu = document.getElementById('profileMenu');

    profileToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        profileToggle.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
        if (!profileToggle.contains(e.target)) {
            profileToggle.classList.remove('active');
        }
    });
});