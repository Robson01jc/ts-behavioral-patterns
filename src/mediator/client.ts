import { Parcel } from '@parcel/core';
import express, { Express, Request, Response } from 'express';
import path from 'path';

let bundler = new Parcel({
  entries: path.join(__dirname, 'app', 'index.html'),
  defaultConfig: '@parcel/config-default',
  defaultTargetOptions: {
    distDir: path.join(__dirname, 'dist'),
  },
});

export const mediatorApp = {
  async main(): Promise<void> {
    try {
      await bundler.run();
    } catch (err) {
      console.log(err);
    }

    const app: Express = express();
    const port = 3000;

    app.use(express.static(path.join(__dirname, 'dist')));

    app.get('/', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  },
};
