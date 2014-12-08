/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */
function Rectangle(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap)
    this.renderShape = function (canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
    }
}

Rectangle.prototype = new Shape();

registerClassicalShape('Rectangle', Rectangle);

function Circle(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);
    this.renderShape = function(canvasCtx) {

        canvasCtx.beginPath();

        //horizontal coordinate for center
        var a = this.left + width / 2;
        //vertical coordinate for center
        var b = this.top + height / 2;

        //radius = half diameter
        var rad = this.height / 2;

        canvasCtx.arc(a, b, rad, 0, 2*Math.PI);

        canvasCtx.fill();
    }
}

Circle.prototype = new Shape();

registerClassicalShape('Circle', Circle);


function Custom(left, top, width, height, stylesMap) {
    Shape.call(this, left, top, width, height, stylesMap);
    this.renderShape = function(canvasCtx) {
        canvasCtx.fillStyle = 'purple';
        canvasCtx.beginPath();
        canvasCtx.moveTo(this.top, this.left);
        canvasCtx.lineTo(this.top + 25, this.left + 25);
        canvasCtx.lineTo(this.top + 125, this.left + 100);
        canvasCtx.lineTo(0, this.left + 120);
        canvasCtx.closePath();
        canvasCtx.fill();
        canvasCtx.strokeText("Trying out some vertical text", this.height, this.top);
        canvasCtx.strokeText("Trying out some horizontal text", this.left, this.height)
    }

}

Custom.prototype = new Shape;
registerClassicalShape('Custom', Custom);
