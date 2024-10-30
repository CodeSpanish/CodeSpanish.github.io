document.addEventListener("DOMContentLoaded", function() {
    function hasUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.has(name);
    }

    function openModal() {
        const modal = document.getElementById("modal");
        modal.setAttribute("open", "");  
    }

    function closeModal() {
        const modal = document.getElementById("modal");
        modal.removeAttribute("open");  
    }

    if (hasUrlParameter("thank-you")) {
        openModal();
    }

    window.closeModal = closeModal;  
});
