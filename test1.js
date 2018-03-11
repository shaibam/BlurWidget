//Create a stage by getting a reference to the canvas

var image = new Image();
image.src = 'fela.jpg';
image.onload = () => {
    stage = new createjs.Stage("demoCanvas");
    //var b = new createjs.Bitmap(img);
    var bitmap = new createjs.Bitmap(image);
    var blurFilter = new createjs.BlurFilter(10,10,1);
    bitmap.filters = [blurFilter];
    bitmap.cache(0,0,image.width,image.height);
    stage.addChild(bitmap);

    circleAlpha = new createjs.Shape();
    circleAlpha.graphics.beginFill("#000000")
    circleAlpha.graphics.drawCircle(0 ,0, 50);
    circleAlpha.cache(-50, -50,100,100);

    var bmp = new createjs.Bitmap(image);
    bmp.filters = [
        new createjs.AlphaMaskFilter(circleAlpha.cacheCanvas)
    ];
    bmp.cache(0,0,image.width,image.height);
    stage.addChild(bmp);
    //stage.addChild(circleAlpha);
    stage.update();
    document.onmousemove = (e) => {

        //circleAlpha.x=e.clientX;
        //circleAlpha.y=e.clientY;
        //stage.removeChild(circleAlpha);
        circleAlpha = new createjs.Shape();
        circleAlpha.graphics.beginFill("#000000")
        circleAlpha.graphics.drawCircle(e.clientX ,e.clientY, 50);
        circleAlpha.cache(0, 0,image.width,image.height);

        //stage.addChild(circleAlpha);
        //circleAlpha.graphics.drawCircle(e.clientX, e.clientY, 50);
        //circleAlpha.cache(e.clientX,e.clientY, e.clientX+50,e.clientY+50);
        //stage.removeChild(bmp);
        //bmp = new createjs.Bitmap(image);
        
        bmp.filters = [
            new createjs.AlphaMaskFilter(circleAlpha.cacheCanvas)
        ];
        bmp.cache(0,0,image.width,image.height);
        
        //stage.addChild(bmp);
        stage.update();
    }
}
