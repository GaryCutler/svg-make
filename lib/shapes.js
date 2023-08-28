class Shape {
    constructor(){
        this.color  = ''

    }
    setColor(color){
        this.color = (color)
    }
}

class Circle extends Shape{
    makeShape(){
        return `<circle cx = "150" cy = "100" r = "80" fill = "${this.color}"/>`
    }
}

class Square extends Shape{
    makeShape(){
        return `<rect  x= "50" y = "50" fill = "${this.color}"/>`
    }
}

class Triangle extends Shape{
    makeShape(){
        return `<polygon points = "50,10 10,90 90,90" fill = "${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle};