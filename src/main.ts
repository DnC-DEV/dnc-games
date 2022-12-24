import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = 4000;

  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('Comunidade Organica')
  .setDescription(' Projeto Comunidade Orgnanica')
  .setContact('Comunidade Organica', 'https://github.com/comuniorg', 'comuni.organacia@gmail.com')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
 

  SwaggerModule.setup('/swagger', app, document); //documentar o meu sistema dentro da rota swagger 


  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT || port);
}
bootstrap();