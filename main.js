//Create a stage by getting a reference to the canvas
var image = new Image();
image.src = 'fela.jpg';
image.onload = () => {
    var circleAlpha;
    var maskedImage;
    var stage = new createjs.Stage("canvas"); //select stage elemnt
    var bitmap = new createjs.Bitmap(image);
    var blurFilter = new createjs.BlurFilter(10,10,1); //blur image

    var maskImage=(x,y)=>{
        //apply a clear circle mask according to X,Y coordinates
        circleAlpha = new createjs.Shape();
        circleAlpha.graphics.beginFill("#000000")
        circleAlpha.graphics.drawCircle(x ,y, 50);
        circleAlpha.cache(0, 0,image.width,image.height);        
        maskedImage.filters = [
            new createjs.AlphaMaskFilter(circleAlpha.cacheCanvas)
        ];
        maskedImage.cache(0,0,image.width,image.height);
        stage.update();
    }
    // blur image
    bitmap.filters = [blurFilter];
    bitmap.cache(0,0,image.width,image.height);
    stage.addChild(bitmap);

    maskedImage = new createjs.Bitmap(image); //create a duplicate of the image to be masked
    stage.addChild(maskedImage);
    maskImage(-50,-50)

    document.onmousemove = (e) => {
        maskImage(e.clientX ,e.clientY);
    }

    var canvas = document.querySelector('#canvas')
    canvas.onclick = () => {
        // clone image and create a 'a' elment to download
        var imgClone = canvas.toDataURL('image/png');
        var ahref=document.createElement('a');
        ahref.innerHTML = 'Download image'
        ahref.href=imgClone;
        ahref.download=true;
        document.body.appendChild(ahref)
    }
}
