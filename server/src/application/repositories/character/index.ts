import { Character } from './../../../domain/entities/character/index'

export interface CharacterRepository {
  // CREATE
  save(character: Character): Promise<void>

  // READ
  findUnique(id: string): Promise<any | null>
  findMany(): Promise<any[] | null>

  // UPDATE
  update(character: Character): Promise<void>

  // DELETE
  delete(id: string): Promise<void>
}
