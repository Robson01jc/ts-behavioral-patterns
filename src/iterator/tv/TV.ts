import { ChannelIterator } from './ChannelIterator';

export class TV implements Iterable<number | undefined> {
  private channels: number[];

  constructor() {
    this.channels = this.searchAvailableChannels();
  }

  searchAvailableChannels(): number[] {
    const limitChannels = 30;
    const channels = [] as number[];
    const zeroOrOne = () => Math.round(Math.random()) as 0 | 1;
    let channelsCount = 0;
    for (let i = 0; i < limitChannels; i++) {
      if (zeroOrOne() === 1) {
        channels[channelsCount++] = i;
      }
    }
    console.log(`Found ${channelsCount} channels...`);

    return channels;
  }

  // [Symbol.iterator]() {
  //   return this.channels[Symbol.iterator]();
  // }

  [Symbol.iterator]() {
    return new ChannelIterator(this.channels);
  }
}
