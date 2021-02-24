const textToImage = require('text-to-image');


module.exports = function () {
    let refealCode = window.prompt('Quel est ton code de parainnage ?', 'MONSUPERCODE')
    textToImage.generate(refealCode).then(function (dataUri) {
        console.log(dataUri);
        function changeLink() {
            var link = document.getElementById("generateLink");

            link.innerHTML = "Télécharger mon flyer";
            link.setAttribute('href', dataUri);

            return false;
        }
        changeLink()
    });

    console.warn(refealCode)


};
