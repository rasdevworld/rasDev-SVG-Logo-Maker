const Square = require("../lib/square")
const square = new Square("RAS","blue","black")

describe("Square", () => {
    describe("properties", () => {
        it("Test text, textColor, shapeColor", () => {
            expect(square.text).toEqual("RAS")
            expect(square.textColor).toEqual("blue")
            expect(square.shapeColor).toEqual("black")
        })
    })

    describe("method", () => {
        it("Test render()", () => {
            expect(square.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">RAS</text></svg>')
        })
    })
})