const productImage = document.getElementById("product-image");
const zoomBox = document.getElementById("zoom-box");

productImage.addEventListener("mousemove", function(event) {
    const { left, top, width, height } = productImage.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const percentX = (x / width) * 100;
    const percentY = (y / height) * 100;

    zoomBox.style.backgroundImage = `url('${productImage.src}')`;
    zoomBox.style.backgroundPosition = `${percentX}% ${percentY}%`;
    zoomBox.style.display = "block";
    zoomBox.style.left = `${event.clientX + 20}px`;
    zoomBox.style.top = `${event.clientY - 75}px`;
});

productImage.addEventListener("mouseleave", function() {
    zoomBox.style.display = "none";
});