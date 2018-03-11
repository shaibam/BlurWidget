((_imageContainer, button) => {
    var _focusElement = _imageContainer.querySelector('div.focus');
    var _blurElement = _imageContainer.querySelector('div.blur');
    _imageContainer.onmousemove = (e) => {
        _focusElement.style.setProperty('clip-path', 'circle(60px at ' + (e.screenX - 30) + 'px ' + (e.screenY - 30) + 'px)');
    }


    var img = new Image();
    img.src = 'fela.jpg';
    var canvasElement = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.filter = 'blur(5px)';
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        img.style.display = 'none';
    };

    button.onclick = () => {
        html2canvas(document.body).then(canvas => {
            document.body.appendChild(canvas)
        });
    }
    var zoomctx = document.getElementById('zoom').getContext('2d');
    var zoom = function (event) {
        var x = event.layerX;
        var y = event.layerY;
        zoomctx.drawImage(canvas,
            Math.min(Math.max(0, x - 5), img.width - 10),
            Math.min(Math.max(0, y - 5), img.height - 10),
            10, 10,
            0, 0,
            200, 200);
    };
    canvas.addEventListener('mousemove', zoom); 

})(document.querySelector('div.image-container'), document.querySelector('button'))