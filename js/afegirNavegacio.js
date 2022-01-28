// afegirNavegacio
let menu = '';
let peu = '';

creaMenuIPeu();


function ompleMenu() {
    menu += '<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-topx">';
    menu += '  <div class="container-fluid">';
    menu += '    <a class="navbar-brand" href="../index.html">';
    menu += '      <img src="../images/logo-no-fons.png"';
    menu += '           height="55"';
    menu += '           alt="Logo"/>';
    menu += '    </a>';
    menu += '    <a class="navbar-brand" href="../index.html">';
    menu += '      <h3><strong>HOTELS</strong></h3>';
    menu += '    </a>';
    menu += '    <!-- Botó de commutació (Toggle button)  -->';
    menu += '    <button class="navbar-toggler"';
    menu += '            type="button"';
    menu += '            data-bs-toggle="collapse"';
    menu += '            data-bs-target="#navbarNavDropdown"';
    menu += '            aria-controls="navbarNavDropdown"';
    menu += '            aria-expanded="false"';
    menu += '            aria-label="Toggle navigation">';
    menu += '      <span class="navbar-toggler-icon"></span>';
    menu += '    </button>';
    menu += '    <!-- Embolcall plegable (Collapsible wrapper) -->';
    menu += '    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">';
    menu += '      <ul class="navbar-nav">';
    menu += '        <li class="nav-item">';
    menu += '          <a class="nav-link" aria-current="page" href="../index.html" id="inici">Inici</a>';
    menu += '        </li>';
    menu += '        <li class="nav-item dropdown">';
    menu += '          <a class="nav-link dropdown-toggle" id="navbarDesplegaHotels" role="button" data-bs-toggle="dropdown" aria-expanded="false">';
    menu += '            Hotels';
    menu += '          </a>';
    menu += '          <ul class="dropdown-menu" aria-labelledby="navbarDesplegaHotels">';
    menu += '            <li><a class="dropdown-item" href="../hotel002.html" id="hotel002">hotel 2</a></li>';
    menu += '            <li><a class="dropdown-item" href="../hotel003.html" id="hotel003">hotel 3</a></li>';
    menu += '            <li><a class="dropdown-item" href="../hotel004.html" id="hotel004">hotel 4</a></li>';
    menu += '          </ul>';
    menu += '        <li class="nav-item">';
    menu += '          <a class="nav-link" href="#">Preus</a>';
    menu += '        </li>';
    menu += '        <li class="nav-item dropdown">';
    menu += '          <a class="nav-link dropdown-toggle" id="navbarDesplegaQuisom" role="button" data-bs-toggle="dropdown" aria-expanded="false">';
    menu += '            Qui som!';
    menu += '          </a>';
    menu += '          <ul class="dropdown-menu" aria-labelledby="navbarDesplegaQuisom">';
    menu += '            <li><a class="dropdown-item" href="../joanpardo.html" id="joanpardo">Joan Pardo</a></li>';
    menu += '            <li><a class="dropdown-item" href="../ivannieto.html" id="ivannieto">Iván Nieto</a></li>';
    menu += '            <li><a class="dropdown-item" href="../vladibellavista.html" id="vladibellavista">Vladi Bellavista</a></li>';
    menu += '          </ul>';
    menu += '        </li>';
    menu += '      </ul>';
    menu += '    </div> <!-- FI Embolcall plegable (Collapsible wrapper) -->';
    menu += '  </div> <!-- FI container-fluid -->';
    menu += '</nav>';
}

function omplePeu() {
    peu += '  <footer class="bg-light text-center text-lg-start fixed-bottom">';
    peu += '    <!-- Copyright -->';
    peu += '    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">';
    peu += '      © 2022 Copyright:';
    peu += '      <a class="text-dark" href="../index.html"><b>HOTELS</b></a>';
    peu += '    </div>';
    peu += '    <!-- Copyright -->';
    peu += '  </footer>';
}

function creaMenuIPeu() {
    ompleMenu(menu);
    omplePeu(peu);
    document.getElementById('barraNavegacio').innerHTML = menu;
    document.getElementById('peuPagina').innerHTML = peu;
    document.getElementById(elementActiu()).classList.add("active");
}

function elementActiu() {
    let enllas = document.getElementById('afegirNavegacio').getAttribute('src');
    if (enllas.indexOf("?") != -1) {
        let dadesRebudes = enllas.split("?")[1];
        let elements = dadesRebudes.split("&");
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let parametres = element.split("=");
            if (parametres[0] == "activar") {
                return parametres[1];
            }
        }
    }
}