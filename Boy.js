class Boy{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("Plucking mangoes/boy.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, 300, 590, this.width, this.height);
    }
}