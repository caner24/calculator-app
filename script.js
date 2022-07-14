window.onload = function () {
    const path = document.querySelector('#secili');
    const metinPath = document.querySelector('#metin');
    const container = document.querySelector('.container');
    var sonuc = 0;
    let islem;
    let durum = false;
    container.addEventListener('click', function (e) {
        if (e.target.matches('h1') || e.target.matches('h4') || e.target.matches('h3')){
            switch (e.target.innerText) {
                case "+":
                    islem = "+";
                    var sayi = metinPath.innerText;
                    metinPath.innerText = "0";
                    islem = "+";
                    sonuc = parseFloat(sonuc) + parseFloat(sayi);
                    break;
                case "-":
                    islem = "-";
                    var sayi = metinPath.innerText;
                    metinPath.innerText = "0";
                    sonuc = parseFloat(sayi) - parseFloat(sonuc);
                    break;
                case "x":
                    if (sonuc == 0) {
                        sonuc = 1;
                    }
                    islem = "x";
                    var sayi = metinPath.innerText;
                    metinPath.innerText = "0";
                    sonuc = parseFloat(sonuc) * parseFloat(sayi);
                    break;
                case "÷":
                    if (sonuc == 0) {
                        sonuc = 1;
                    }
                    islem = "÷";
                    var sayi = metinPath.innerText;
                    metinPath.innerText = "0";
                    sonuc = parseFloat(sayi) / parseFloat(sonuc);
                    break;
                case "=":
                    switch (islem) {
                        case "+":
                            sonuc = parseFloat(sonuc) + parseFloat(metinPath.innerText);
                            metinPath.innerText = sonuc;
                            sonuc = 0;
                            break;
                        case "-":
                            sonuc = parseFloat(sonuc) - parseFloat(metinPath.innerText);
                            metinPath.innerText = sonuc;
                            sonuc = 0;
                            break;
                        case "x":
                            sonuc = parseFloat(sonuc) * parseFloat(metinPath.innerText);
                            metinPath.innerText = sonuc;
                            sonuc = 0;
                            break;
                        case "÷":
                            sonuc = parseFloat(sonuc) / parseFloat(metinPath.innerText);
                            metinPath.innerText = sonuc;
                            sonuc = 0;
                            break;
                    }
                    break;
                case "AC":
                    metinPath.innerText = "0";
                    sonuc = 0;
                    break;
                case ".":
                    metinPath.innerText += ".";
                    break;
                default:
                    let sözcük = metinPath.innerText;
                    if (sözcük == 0 && !sözcük.includes(".")) {
                        metinPath.innerText = "";
                        metinPath.innerText += e.target.innerText;
                    }
                    else {
                        metinPath.innerText += e.target.innerText;
                    }
            }
        }
    });
}