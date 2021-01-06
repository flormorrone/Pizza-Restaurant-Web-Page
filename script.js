function abrir(seccion) {

    switch (seccion) {
        case "menu":
            document.getElementById("principal").style.display = "none";
            document.getElementById("menu").style.display = "block";
            document.getElementById("nosotros").style.display = "none";
            document.getElementById("contacto").style.display = "none";
            document.getElementById("promo").style.display = "none";
            break;
        case "nosotros":
            document.getElementById("principal").style.display = "none";
            document.getElementById("menu").style.display = "none";
            document.getElementById("nosotros").style.display = "block";
            document.getElementById("contacto").style.display = "none";
            document.getElementById("promo").style.display = "none";
            break;
        case "contacto":
            document.getElementById("principal").style.display = "none";
            document.getElementById("menu").style.display = "none";
            document.getElementById("nosotros").style.display = "none";
            document.getElementById("contacto").style.display = "block";
            document.getElementById("promo").style.display = "none";
            break;
        case "promo":
            document.getElementById("principal").style.display = "none";
            document.getElementById("menu").style.display = "none";
            document.getElementById("nosotros").style.display = "none";
            document.getElementById("contacto").style.display = "none";
            document.getElementById("promo").style.display = "block";
            break;
        case "logo":
            document.getElementById("principal").style.display = "block";
            document.getElementById("menu").style.display = "none";
            document.getElementById("nosotros").style.display = "none";
            document.getElementById("contacto").style.display = "none";
            document.getElementById("promo").style.display = "none";
            break;

    }
}