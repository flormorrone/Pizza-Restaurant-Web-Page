function start() {

    //-------------------nav principal----------------------------------------

    var menu = document.getElementById("btnmenu");
    var nosotros = document.getElementById("btnnosotros");
    var contacto = document.getElementById("btncontacto");
    var promo = document.getElementById("btnpromo");
    var principal = document.getElementById("logo");

    menu.addEventListener("click", abrirMenu, false);
    nosotros.addEventListener("click", abrirNos, false);
    contacto.addEventListener("click", abrirCon, false);
    promo.addEventListener("click", abrirPromo, false);
    principal.addEventListener("click", abrirPincipal, false);

    function abrirMenu() {
        document.getElementById("principal").style.display = "none";
        document.getElementById("menu").style.display = "block";
        document.getElementById("nosotros").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("promo").style.display = "none";
    }

    function abrirNos() {
        document.getElementById("principal").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("nosotros").style.display = "block";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("promo").style.display = "none";
    }

    function abrirCon() {
        document.getElementById("principal").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("nosotros").style.display = "none";
        document.getElementById("contacto").style.display = "block";
        document.getElementById("promo").style.display = "none";
    }

    function abrirPromo() {
        document.getElementById("principal").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("nosotros").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("promo").style.display = "block";
    }

    function abrirPincipal() {
        document.getElementById("principal").style.display = "block";
        document.getElementById("menu").style.display = "none";
        document.getElementById("nosotros").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("promo").style.display = "none";
    }


    //-----------------------opcion menu----------------------



    var pizza = document.getElementById("btnpizza");
    var empanadas = document.getElementById("btnempanadas");
    var postres = document.getElementById("btnpostres");



    pizza.addEventListener("click", abrirPizza, false);
    empanadas.addEventListener("click", abrirEmpanadas, false);
    postres.addEventListener("click", abrirPostres, false);

    function abrirPizza() {
        document.getElementById("flyerpizza").style.display = "block";
        document.getElementById("flyerempanadas").style.display = "none";
        document.getElementById("flyerpostres").style.display = "none";

    }

    function abrirEmpanadas() {
        document.getElementById("flyerpizza").style.display = "none";
        document.getElementById("flyerempanadas").style.display = "block";
        document.getElementById("flyerpostres").style.display = "none";
    }

    function abrirPostres() {
        document.getElementById("flyerpizza").style.display = "none";
        document.getElementById("flyerempanadas").style.display = "none";
        document.getElementById("flyerpostres").style.display = "block";
    }
}
