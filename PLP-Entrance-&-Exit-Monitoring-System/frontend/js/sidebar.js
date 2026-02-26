    const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const html = document.documentElement;
        const body = document.body;

        menuToggle.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
                body.classList.toggle('sidebar-mobile-open'); // Mobile indication class
            } else {
                html.classList.toggle('sidebar-is-collapsed');
                const isCollapsed = html.classList.contains('sidebar-is-collapsed');
                localStorage.setItem('plp_sidebar_state', isCollapsed ? 'collapsed' : 'expanded');
            }
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('sidebar-mobile-open');
        });

        function updateClock() {
            const now = new Date();
            document.getElementById('live-date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            document.getElementById('live-time').textContent = now.toLocaleTimeString('en-US', { hour12: true });
        }
        setInterval(updateClock, 1000);
        updateClock();