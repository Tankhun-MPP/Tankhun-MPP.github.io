async function navigateCheck(targetUrl) {
    try {
        let response = await fetch(targetUrl, { method: 'HEAD' });
        if (response.ok) {
            window.location.href = targetUrl;
        } else {
            window.location.href = "/no_page/";
        }
    } catch (error) {
        window.location.href = "/network_failed/";
    }
}
function revealSpoiler(element) {
    if (!element.dataset.originalText) {
        element.dataset.originalText = element.innerText;
    }

    if (element.innerText === element.dataset.spoiler) {
        element.innerText = element.dataset.originalText;
    } else {
        element.innerText = element.dataset.spoiler;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    
    // Only attach listener IF the button actually exists on this page
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});