import { prismaSkillRepository } from './../../../../application/repositories/implements/prisma/PrismaSkillRepository'
import { SkillRepository } from './../../../repositories/skill/index'

class DeleteSkill {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private skillRepository: SkillRepository
  ) {}

  async execute (id: string) {
    if (!id.trim()) {
      throw new Error('Id is required')
    }

    if (!await this.skillRepository.findUnique(id)) {
      throw new Error('Skill does not exist')
    }

    await this.skillRepository.delete(id)
  }
}

export const deleteSkill = new DeleteSkill(
  prismaSkillRepository
)
