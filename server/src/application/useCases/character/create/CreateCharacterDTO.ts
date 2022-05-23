export type CreateCharacterDTO = {
  name: string,
  playerName: string,
  currentHitPoints?: number,
  maxHitPoints?: number,
  currentSanity?: number,
  maxSanity?: number,
  currentStressPoints?: number,
  maxStressPoints?: number,
  createdAt?: Date,
  updatedAt?: Date
}
