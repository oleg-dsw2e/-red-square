function Color() {
    const r = document.getElementById("r").value;
    const g = document.getElementById("g").value;
    const b = document.getElementById("b").value;

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        alert("Значения должны быть в диапазоне от 0 до 300");
        return;
    }

    document.getElementById("square").style.backgroundColor =
        `rgb(${r}, ${g}, ${b})`;
}
