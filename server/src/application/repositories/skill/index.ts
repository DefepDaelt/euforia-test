import { Skill } from '../../../domain/entities/skill'

export interface SkillRepository {
  // CREATE
  save(skill: Skill): Promise<void>

  // READ
  findUnique(id: string): Promise<any | null>
  findMany(): Promise<any[] | null>

  // UPDATE
  update(skill: Skill): Promise<void>

  // DELETE
  delete(id: string): Promise<void>
}
