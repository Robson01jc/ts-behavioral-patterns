export class AlexaAI {
  constructor(
    private associations: Map<string, string[]> = new Map<string, string[]>()
  ) {}

  addAssociation(key: string, association: string[]): void {
    this.associations.set(key, association);
  }

  getKeyFromAssociations(request: string): string | null {
    const [key] =
      [...this.associations.entries()].find(([, associations]) => {
        return associations.every((association) =>
          request.includes(association)
        );
      }) ?? [];

    return key ?? null;
  }
}
