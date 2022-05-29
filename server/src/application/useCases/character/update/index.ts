import { CharacterRepository } from '../../../../application/repositories/character'
import { prismaCharacterRepository } from '../../../../application/repositories/implements/prisma/PrismaCharacterRepository'
import { Character } from '../../../../domain/entities/character'
import { UpdateCharacterDTO } from './UpdateCharacterDTO'

class UpdateCharacter {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private characterRepository: CharacterRepository
  ) {}

  async execute (newCharacter: UpdateCharacterDTO) {
    try {
      if (!newCharacter.id) {
        throw new Error('Id is required')
      }
      const character: Character = await this.characterRepository.findUnique(newCharacter.id)

      if (!character) {
        throw new Error('Character does not exist')
      }

      await this.characterRepository.update(await Character.create({
        name: newCharacter.name,
        playerName: newCharacter.playerName,
        origin: newCharacter.origin,
        class: newCharacter.class,
        patent: newCharacter.patent,
        exposureLevel: newCharacter.exposureLevel,
        maxHitPoints: newCharacter.maxHitPoints,
        currentHitPoints: newCharacter.currentHitPoints,
        maxSanity: newCharacter.maxSanity,
        currentSanity: newCharacter.currentSanity,
        maxStressPoints: newCharacter.maxStressPoints,
        currentStressPoints: newCharacter.currentStressPoints,
        createdAt: newCharacter.createdAt
      }, newCharacter.id))
    } catch (err) {
      if (err) {
        throw new Error(err.message || 'Unexpected error')
      }
      return null
    }
  }
}

export const updateCharacter = new UpdateCharacter(
  prismaCharacterRepository
)
