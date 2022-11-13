import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: /^https:\/\/auth-service-server-[a-z0-9]+-exstarzii.vercel.app$/,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'UPDATE', 'DELETE'],
    credentials: true
  });
  await app.listen(3000);
}
bootstrap();
