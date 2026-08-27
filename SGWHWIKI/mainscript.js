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
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    
    // Only attach listener IF the button actually exists on this page
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});