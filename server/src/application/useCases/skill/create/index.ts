import { Skill } from '../../../../domain/entities/skill'
import { SkillRepository } from '../../../repositories/skill'
import { prismaSkillRepository } from './../../../repositories/implements/prisma/PrismaSkillRepository'
import { CreateSkillDTO } from './CreateSkillDTO'

class CreateSkill {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private skillRepository: SkillRepository
  ) {}

  async execute (props: CreateSkillDTO) {
    const skill = await Skill.create(props)

    this.skillRepository.save(skill)
  }
}

export const createSkill = new CreateSkill(
  prismaSkillRepository
)
