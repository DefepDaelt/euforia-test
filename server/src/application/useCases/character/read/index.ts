import { CharacterRepository } from '../../../../application/repositories/character'
import { prismaCharacterRepository } from '../../../../application/repositories/implements/prisma/PrismaCharacterRepository'

class ReadCharacter {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private characterRepository: CharacterRepository
  ) {}

  async execute (id?: string) {
    try {
      if (!id) {
        const characters = await this.characterRepository.findMany()

        return characters
      }
      const character = await this.characterRepository.findUnique(id)

      return character
    } catch (err) {
      if (err) {
        throw new Error(err.message || 'Unexpected error')
      }
      return null
    }
  }
}

export const readCharacter = new ReadCharacter(
  prismaCharacterRepository
)
