const {Circle, Square, Triangle}  = require('./shapes.js')
describe('circle', ()=>{
    test('renders a circle with a blue fill color',()=>{
        const shape = new Circle()
        const expectedShape = `<circle cx = "150" cy = "100" r = "80" fill = "blue"/>`
        shape.setColor('blue')
        expect(shape.makeShape()).toEqual(expectedShape)
    })
}) 