import { Attribute } from '../../../domain/entities/attribute'

export interface AttributeRepository {
  // CREATE
  save(attribute: Attribute): Promise<void>

  // READ
  findUnique(id: string): Promise<any | null>
  findMany(): Promise<any[] | null>

  // UPDATE
  update(attribute: Attribute): Promise<void>

  // DELETE
  delete(id: string): Promise<void>
}
