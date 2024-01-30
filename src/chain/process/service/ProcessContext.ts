export class ProcessContext<R = null> {
  constructor(
    private context: Map<string, any> = new Map<string, any>(),
    private processResult: R | null = null
  ) {}

  get<T>(key: string): T {
    if (!key.includes('.')) return this.context.get(key) as T;
    const steps = key.split('.');
    const [actualKey] = steps.slice(-1);
    let currentMap: Map<string, any> = this.context;
    for (const step of steps.slice(0, -1)) {
      if (currentMap instanceof Map) currentMap = currentMap.get(step);
      else throw Error(`Could not navigate through ${step} step`);
    }

    return currentMap.get(actualKey) as T;
  }

  put<T>(key: string, value: any): any {
    this.context.set(key, value);

    return this.context.get(key) as T;
  }

  remove<T>(key: string): any {
    if (!this.context.has(key)) return null;
    const value = this.context.get(key);
    this.context.delete(key);

    return value as T;
  }

  reset(): void {
    this.context = new Map<string, any>();
    this.processResult = null;
  }

  encapsulate(key: string): void {
    const newContext = new Map<string, any>();
    newContext.set(key, this.context);
    this.context = newContext;
  }

  setProcessResult(result: R): void {
    this.processResult = result;
  }

  getProcessResult(): R | null {
    return this.processResult;
  }
}
