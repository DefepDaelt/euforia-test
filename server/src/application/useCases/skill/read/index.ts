import { prismaSkillRepository } from '../../../../application/repositories/implements/prisma/PrismaSkillRepository'
import { SkillRepository } from '../../../../application/repositories/skill'

class ReadSkill {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private skillRepository: SkillRepository
  ) {}

  async execute (id?: string) {
    try {
      if (!id) {
        const skills = await this.skillRepository.findMany()

        return skills
      }
      const skill = await this.skillRepository.findUnique(id)

      return skill
    } catch (err) {
      if (err) {
        throw new Error(err.message || 'Unexpected error')
      }
      return null
    }
  }
}

export const readSkill = new ReadSkill(
  prismaSkillRepository
)
