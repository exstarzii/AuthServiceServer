import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // );
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://auth-service-frontend-l664hyhn1-exstarzii.vercel.app',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
