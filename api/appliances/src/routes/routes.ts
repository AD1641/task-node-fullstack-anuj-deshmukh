import express, { Request, Response } from 'express'
import applianceService from '../services/applianceService'
import { Appliance, applianceTypes } from '../models/appliance'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.json(applianceService.getAll())
})

router.get('/:id', (req: Request, res: Response) => {
  const appliance = applianceService.getById(
    Number(req.params.id)
  )

  if (!appliance) {
    return res.status(404).json({ error: 'Not found' })
  }

  return res.json(appliance)
})

router.post('/', (req: Request, res: Response) => {
  const { name, type } = req.body

  if (!name || !type) {
    return res.status(400).json({
      error: 'name and type required',
    })
  }

  if (!applianceTypes.includes(type)) {
    return res.status(400).json({
      error: 'invalid type',
    })
  }

  const created = applianceService.create({ name, type })

  return res.status(201).json(created)
})

router.put('/:id', (req: Request, res: Response) => {
  const updated = applianceService.update(
    Number(req.params.id),
    req.body
  )

  if (!updated) {
    return res.status(404).json({ error: 'Not found' })
  }

  return res.json(updated)
})

router.delete('/:id', (req: Request, res: Response) => {
  const deleted = applianceService.remove(
    Number(req.params.id)
  )

  if (!deleted) {
    return res.status(404).json({ error: 'Not found' })
  }

  return res.status(204).send()
})

router.post('/:id/reboot', (req: Request, res: Response) => {
  const result = applianceService.reboot(
    Number(req.params.id)
  )

  if (!result) {
    return res.status(404).json({ error: 'Not found' })
  }

  return res.json(result)
})

export default router