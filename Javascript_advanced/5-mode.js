function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}
function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green")
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white")
    let screamMode = changeMode(12, "norma", "lowercase", "white", "black")
    let para = document.createElement("p");
    para.textContent = "Welcome Holberton!";
    document.body.appendChild(para)

    let b1 = document.createElement("button");
    b1.textContent = "Spooky";
    b1.setAttribute("id", "spookyid")
    document.body.appendChild(b1)

    let b2 = document.createElement("button");
    b2.textContent = "Dark mode";
    b2.setAttribute("id", "darkModeid")
    document.body.appendChild(b2)

    let b3 = document.createElement("button");
    b3.textContent = "Scream mode";
    b3.setAttribute("id", "screamModeid")
    document.body.appendChild(b3)

    b2.addEventListener("click", darkMode)
    b1.addEventListener("click", spooky)
    b3.addEventListener("click", screamMode)
}




main()