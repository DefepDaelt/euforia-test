import { Request, Response } from 'express'
import { createCharacter } from './'

export class CreateCharacterController {
  async handle (req: Request, res: Response): Promise<Response> {
    const props = req.body

    try {
      await createCharacter.execute({
        name: props.name,
        playerName: props.playerName,
        origin: props.origin,
        class: props.class,
        patent: props.patent,
        exposureLevel: props.exposureLevel,
        maxHitPoints: props.maxHitPoints,
        currentHitPoints: props.currentHitPoints || props.maxHitPoints,
        maxSanity: props.maxSanity,
        currentSanity: props.currentSanity || props.maxSanity,
        maxStressPoints: props.maxStressPoints,
        currentStressPoints: props.currentStressPoints || props.maxStressPoints,
        createdAt: props.createdAt,
        updatedAt: props.updatedAt
      })

      return res.status(201).send({ message: 'Success: character created' })
    } catch (err) {
      return res.status(400).send({
        message: 'Faild, error creating character',
        error: err.message || 'Unexpected error creating character'
      })
    }
  }
}

export const createCharacterController = new CreateCharacterController()
