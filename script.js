document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll(".paragraph");
    paragraphs.forEach(p => {
        const words = p.innerText.split(" ");
        if (words.length > 15) {
            p.innerText = words.slice(0, 15).join(" ") + "...";
        }
    });

    const judul = document.querySelectorAll(".judul");
    judul.forEach(p => {
        const words = p.innerText.split(" ");
        if (words.length > 3) {
            p.innerText = words.slice(0, 3).join(" ") + "...";
        }
    });
    
});
