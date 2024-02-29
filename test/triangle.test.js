const Triangle = require("../lib/triangle")
const triangle = new Triangle("RAS", "blue", "black")

describe("Triangle", () => {
    describe("properties", () => {
        it("Test text, textColor, shapeColor", () => {
            expect(triangle.text).toEqual("RAS")
            expect(triangle.textColor).toEqual("blue")
            expect(triangle.shapeColor).toEqual("black")
        })
    })

    describe("method", () => {
        it("Test render()", () => {
            expect(triangle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polyline points="150, 18 244, 182 56, 182" fill="black" width="300" height="200"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">RAS</text></svg>')
        })
    })
})