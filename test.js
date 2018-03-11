//Create a stage by getting a reference to the canvas
stage = new createjs.Stage("demoCanvas");
/*//Create a Shape DisplayObject.
circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
//Set position of Shape instance.
circle.x = circle.y = 50;
//Add Shape instance to stage display list.
stage.addChild(circle);
//Update stage will render next frame*/

var b = new createjs.Bitmap("fela.jpg");
stage.addChild(b);

var shape = new createjs.Shape().set({ x: 100, y: 100 });
shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);

var blurFilter = new createjs.BlurFilter(5, 5, 1);
shape.filters = [blurFilter];
var bounds = blurFilter.getBounds();

shape.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);
stage.addChild(shape);
stage.update();

document.body.onclick = () => {
    var imgClone = document.querySelector('#demoCanvas').toDataURL('image/png');
    var img = document.createElement('img');
    img.src = imgClone;
    document.body.appendChild(img);
}

document.onmousemove = (e) => {
    shape.x = e.clientX;
    shape.y = e.clientY;
    stage.update();
}
