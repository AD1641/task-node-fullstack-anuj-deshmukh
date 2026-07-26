import request from 'supertest'
import app from '../app'

describe('POST /appliances', () => {
    it('creates a new appliance', async () => {
        const response = await request(app)
            .post('/appliances')
            .send({
                name: 'Appliance 00ab',
                type: 'Lightbulb',
            })

        expect(response.status).toBe(201)

        expect(response.body.name).toBe(
            'Appliance 00ab'
        )

        expect(response.body.type).toBe(
            'Lightbulb'
        )
    })

    it('returns 400 for invalid appliance type', async () => {
        const response = await request(app)
            .post('/appliances')
            .send({
                name: 'Appliance xxxx',
                type: 'Laptop',
            })

        expect(response.status).toBe(400)
    })
})