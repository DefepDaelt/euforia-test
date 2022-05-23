import { Request, Response } from 'express'
import { readCharacter } from './index'

class ReadCharacterController {
  async handle (req: Request, res: Response) {
    let id: string

    if (req.params.id) {
      id = req.params.id
    }

    if (req.body.id) {
      id = req.body.id
    }

    const character: any[] = await readCharacter.execute(id)

    if (!character) {
      return res.status(404).send({ message: 'Characters not found' })
    }

    if (character.length === 0) {
      return res.status(200).send({ message: 'No characters found' })
    }

    if (character.length === 1) {
      return res.status(200).send({ character })
    }

    return res.status(200).send({ characters: character })
  }
}

export const readCharacterController = new ReadCharacterController()
