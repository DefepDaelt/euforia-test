import { Attribute, Skill } from '@prisma/client'
import { Character } from 'domain/entities/character'
import { prisma } from '../../../../../utils/prisma'
import { CharacterRepository } from './../../../character/index'

export class PrismaCharacterRepository implements CharacterRepository {
  async save (character: Character) {
    const parseRelationArray = (array: Attribute[] | Skill[], entityName: string): any[] => {
      return array.map(item => ({
        [entityName]: {
          connect: {
            id: item.id
          }
        }
      }))
    }

    const attributes = await prisma.attribute.findMany()
    const skills = await prisma.skill.findMany()

    await prisma.character.create({
      data: {
        id: character.id,
        name: character.props.name,
        playerName: character.props.playerName,
        origin: character.props.origin,
        class: character.props.class,
        patent: character.props.patent,
        exposureLevel: character.props.exposureLevel,
        maxHitPoints: character.props.maxHitPoints,
        currentHitPoints: character.props.currentHitPoints,
        maxSanity: character.props.maxSanity,
        currentSanity: character.props.currentSanity,
        maxStressPoints: character.props.maxStressPoints,
        currentStressPoints: character.props.currentStressPoints,
        createdAt: character.props.createdAt,
        updatedAt: character.props.updatedAt,
        attributes: {
          create: parseRelationArray(attributes, 'attribute')
        },
        skills: {
          create: parseRelationArray(skills, 'skill')
        }
      },
      include: {
        attributes: {
          include: {
            attribute: true
          }
        },
        skills: {
          include: {
            skill: true
          }
        }
      }
    })
  }

  async findUnique (id: string) {
    try {
      const character = await prisma.character.findUnique({
        where: {
          id
        },
        include: {
          attributes: {
            include: {
              attribute: true
            }
          },
          skills: {
            include: {
              skill: true
            }
          }
        }
      })

      return {
        id: character.id,
        name: character.name,
        playerName: character.playerName,
        maxHitPoints: character.maxHitPoints,
        currentHitPoints: character.currentHitPoints,
        maxSanity: character.maxSanity,
        currentSanity: character.currentSanity,
        maxStressPoints: character.maxStressPoints,
        currentStressPoints: character.currentStressPoints,
        attributes: character.attributes,
        skills: character.skills,
        createdAt: character.createdAt,
        updatedAt: character.updatedAt
      }
    } catch (err) {
      return null
    }
  }

  async findMany () {
    const characters = await prisma.character.findMany({
      include: {
        attributes: {
          include: {
            attribute: true
          }
        },
        skills: {
          include: {
            skill: true
          }
        }
      }
    })
    return characters
  }

  async update (character: Character) {
    await prisma.character.update({
      where: {
        id: character.id
      },

      data: {
        name: character.props.name,
        playerName: character.props.playerName,
        origin: character.props.origin,
        class: character.props.class,
        patent: character.props.patent,
        exposureLevel: character.props.exposureLevel,
        maxHitPoints: character.props.maxHitPoints,
        currentHitPoints: character.props.currentHitPoints,
        maxSanity: character.props.maxSanity,
        currentSanity: character.props.currentSanity,
        maxStressPoints: character.props.maxStressPoints,
        currentStressPoints: character.props.currentStressPoints,
        updatedAt: character.props.updatedAt
      }
    })
  }

  async delete (id: string) {
    const character = prisma.character.delete({
      where: {
        id
      }
    })

    const attributes = prisma.characterAttributes.deleteMany({
      where: {
        characterId: id
      }
    })

    const skills = prisma.characterSkills.deleteMany({
      where: {
        characterId: id
      }
    })

    await prisma.$transaction([attributes, skills, character])
  }
}

export const prismaCharacterRepository = new PrismaCharacterRepository()
