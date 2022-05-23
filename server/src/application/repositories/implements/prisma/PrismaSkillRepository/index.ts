import { Skill } from '../../../../../domain/entities/skill'
import { prisma } from '../../../../../utils/prisma'
import { SkillRepository } from '../../../skill'

export class PrismaSkillRepository implements SkillRepository {
  async save (skill: Skill) {
    await prisma.skill.create({
      data: {
        id: skill.id,
        name: skill.props.name,
        description: skill.props.description,
        createdAt: skill.props.createdAt,
        updatedAt: skill.props.updatedAt
      }
    })
  }

  async findUnique (id: string) {
    try {
      const skill = await prisma.skill.findUnique({
        where: {
          id
        }
      })

      return skill
    } catch (err) {
      return null
    }
  }

  async findMany () {
    const skills = await prisma.skill.findMany()
    return skills
  }

  async update (skill: Skill) {
    await prisma.skill.update({
      where: {
        id: skill.id
      },

      data: {
        name: skill.props.name,
        description: skill.props.description,
        createdAt: skill.props.createdAt,
        updatedAt: skill.props.updatedAt
      }
    })
  }

  async delete (id: string) {
    const skill = prisma.skill.delete({
      where: {
        id
      }
    })

    const character = prisma.characterSkills.deleteMany({
      where: {
        skillId: id
      }
    })

    await prisma.$transaction([character, skill])
  }
}

export const prismaSkillRepository = new PrismaSkillRepository()
