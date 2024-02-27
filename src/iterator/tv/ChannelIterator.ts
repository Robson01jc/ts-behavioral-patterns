export class ChannelIterator implements Iterator<number | undefined> {
  constructor(private channels: number[], private index: number = 0) {}

  next() {
    if (!this.channels.length) return { value: undefined, done: true };

    const value = this.channels[this.index++];

    return {
      value,
      done: this.channels[this.index] === undefined,
    };
  }
}
