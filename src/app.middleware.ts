import { Injectable, NestMiddleware } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const bootstrap = async (express: Express.Application) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(express));
  await app.init();
  return app;
}

@Injectable()
export class AppMiddleware implements NestMiddleware {

  constructor(private expressInstance: Express.Application) {}

  use(req: any, res: any, next: () => void) {
    return bootstrap(this.expressInstance);
  }
}
