const inquirer = require('inquirer');
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shapes')
const Svg = require("./lib/svg")
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to (3) Characters:'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'type in color or hexidecimal for a color'


    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'enter the shape color. you can use hexidecimal',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'choose a shape',
        choices: ['circle', 'square', 'triangle']
    }
]

function init(){
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        let newLogo;
        switch(data.shape){
            case 'circle':
        newLogo = new Circle()
        break;
            case 'square':
        newLogo = new Square()
        break;
            case 'triangle':
        newLogo = new Triangle()
        break;
        }
    newLogo.setColor(data.shapecolor)
        const textLogo = new Svg()
        textLogo.setShape(newLogo)
        textLogo.setText(data.text, data.textcolor)
        if (data.text.length > 3){
            console.log("must be less than 3 charcters")
            init()
        }
    writeToFile("logo.svg", textLogo.makeSvg())
    });
}

function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}
init()