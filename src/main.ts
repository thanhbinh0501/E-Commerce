import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AppDataSource } from '../datasource';

async function bootstrap() {
  await AppDataSource.initialize();
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server is running on: http://localhost:${port}`)
}
bootstrap();
