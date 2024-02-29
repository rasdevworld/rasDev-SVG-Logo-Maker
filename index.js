const inquirer = require("inquirer")
const fs = require("fs")
const Circle = require("./lib/circle")
const Square = require("./lib/square")
const Triangle = require("./lib/triangle")

const questions = [
    {
        type : "input",
        message : "Enter the name for your logo:",
        name : "logoText"
    },
    {
        type : "input",
        message : "Choose the text color:",
        name : "textColor"
    },
    {
        type : "list",
        message : "Choose the shape for your logo:",
        name : "shape",
        choices : ["circle", "square", "triangle"]
    },
    {
        type : "input",
        message : "Choose the shape color:",
        name : "shapeColor",
    }
]

inquirer.prompt(questions)
.then(data => {
    if(data.shape === "circle") {
        const circle = new Circle(data.logoText, data.textColor, data.shapeColor)
        fs.writeFile("./examples/circle.svg", circle.render(), err => {
            console.log("Logo Successfully Created!")
        })
    }else if(data.shape === "square") {
        const square = new Square(data.logoText, data.textColor, data.shapeColor)
        fs.writeFile("./examples/square.svg", square.render(), err => {
            console.log("Logo Successfully Created!")
        })

    }else {
        const triangle = new Triangle(data.logoText, data.textColor, data.shapeColor)
        fs.writeFile("./examples/triangle.svg", triangle.render(), err => {
            console.log("Logo Successfully Created!")
        })
    }
})
