import crypto from 'crypto'
import { Appliance, applianceTypes } from './models/appliance'

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

const appliances: Appliance[] = []

for (let i = 0; i < 100; i++) {
  appliances.push({
    id: i,
    name: `Appliance ${crypto.randomBytes(2).toString('hex')}`,
    type:
      applianceTypes[Math.floor(Math.random() * applianceTypes.length)],
    createdAt: randomDate(
      new Date(2022, 0, 1),
      new Date(2022, 0, 30)
    ),
  })
}

export default appliances