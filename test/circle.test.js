const Circle = require("../lib/circle")
const circle = new Circle("RAS","blue","black")

describe("Circle", () => {
    describe("properties", () => {
        it("Test text, textColor, shapeColor", () => {
            expect(circle.text).toEqual("RAS")
            expect(circle.textColor).toEqual("blue")
            expect(circle.shapeColor).toEqual("black")
        })
    })

    describe("method", () => {
        it("Test render()", () => {
            expect(circle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">RAS</text></svg>')
        })
    })
})