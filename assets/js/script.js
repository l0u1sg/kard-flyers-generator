function createCode() {
    let input = window.prompt('Quel est ton code de parainnage ?', 'MONSUPERCODE')
    let refealCode = input.toUpperCase()
    function textToImage(x) {
        var circle_canvas = document.getElementById("canvas");
        var context = circle_canvas.getContext("2d");
        var img = new Image();
        img.src = "assets/img/img.jpg";
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FFD700";
            context.lineStyle = "#FFD700";
            context.font = "150px sans-serif";
            context.textAlign = "left";
            context.fillText(refealCode, x, 3400);
        };
        console.log(circle_canvas.toDataURL())
        document.getElementById("download").innerHTML = "Télécharger mon Flyer";
    }
    if (refealCode.length === 1) {
        window.alert("Ton code de parainnage est trop court :/")
    }
    else if (refealCode.length <= 6) {
        let x = 1300
        textToImage(x)
    }
    else if (refealCode.length <= 10) {
        let height = 900
        textToImage(height)
    }

    else if (refealCode.length > 11) {
        window.alert("Malheureusement ton code parainnage est trop long :/")
    }

    console.warn(refealCode)
}

download_img = function (el) {
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
};