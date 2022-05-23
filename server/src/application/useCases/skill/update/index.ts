import { prismaSkillRepository } from '../../../../application/repositories/implements/prisma/PrismaSkillRepository'
import { SkillRepository } from '../../../../application/repositories/skill'
import { Skill } from '../../../../domain/entities/skill'
import { UpdateSkillDTO } from './UpdateSkillDTO'

class UpdateSkill {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private skillRepository: SkillRepository
  ) {}

  async execute (newSkill: UpdateSkillDTO) {
    try {
      if (!newSkill.id) {
        throw new Error('Id is required')
      }
      const skill: Skill = await this.skillRepository.findUnique(newSkill.id)

      if (!skill) {
        throw new Error('Skill does not exist')
      }

      await this.skillRepository.update(await Skill.create({
        name: newSkill.name,
        description: newSkill.description,
        createdAt: newSkill.createdAt
      }, newSkill.id))
    } catch (err) {
      if (err) {
        throw new Error(err.message || 'Unexpected error')
      }
      return null
    }
  }
}

export const updateSkill = new UpdateSkill(
  prismaSkillRepository
)
