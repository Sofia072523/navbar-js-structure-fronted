//form/form.load.js
document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".services__form-container");

    if (container) {
        const response = await fetch("/frontend/public/views/components/form.html")

        const html = await response.text();
        container.innerHTML = html


        const script = document.createElement('script');
        script.src = "/frontend/public/js/components/form.load.js"
        document.body.appendChild(script);
    }
});