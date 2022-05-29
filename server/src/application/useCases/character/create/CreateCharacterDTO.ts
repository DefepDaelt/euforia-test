export type CreateCharacterDTO = {
  name: string,
  playerName: string,
  origin: string,
  class: string,
  patent: string,
  exposureLevel: string,
  currentHitPoints?: number,
  maxHitPoints?: number,
  currentSanity?: number,
  maxSanity?: number,
  currentStressPoints?: number,
  maxStressPoints?: number,
  createdAt?: Date,
  updatedAt?: Date
}
