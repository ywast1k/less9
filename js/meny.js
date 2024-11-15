document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    dropdownBtn.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('show');
        event.stopPropagation();
    });
});

/* Закрытие выпадающего меню при клике вне его области */
window.onclick = function(event) {
    if (!event.target.closest('.dropdown-btn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
};
