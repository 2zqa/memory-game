export class Card {
  // Inactive: no letter visible
  // Active: letter temporarily visible
  // Found: letter permanently visible
  public status: 'inactive' | 'active' | 'found' = 'inactive';

  constructor(public letter: string) {}
}
