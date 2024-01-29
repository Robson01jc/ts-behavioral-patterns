export class UserRepository {
  private static memory: Map<string, Map<string, any>> = new Map();
  private static instance: UserRepository = new UserRepository();

  static getInstance(): UserRepository {
    return UserRepository.instance;
  }

  constructor() {
    const user: Map<string, any> = new Map<string, any>();
    user.set('name', 'user #1');
    user.set('email', 'user@email.com');
    user.set('password', '123456');
    UserRepository.memory.set('user@email.com', user);
  }

  getUserByEmail(email: string): Map<string, any> | null {
    return UserRepository.memory.get(email) ?? null;
  }

  getUsers(): Map<string, any>[] {
    return [...UserRepository.memory.values()];
  }

  saveUser(user: Map<string, any>): void {
    UserRepository.memory.set(user.get('email') as string, user);
  }
}
