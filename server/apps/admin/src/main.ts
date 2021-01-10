import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AdminModule);
  app.enableCors()
  app.useStaticAssets('uploads', {
    prefix: '/uploads'
  })

  const options = new DocumentBuilder()
    .setTitle('topfullstack admin-api')
    .setDescription('后台管理api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);

  const PORT = process.env.ADMIN_PORT || 3002
  await app.listen(PORT);

  console.log(`http://127.0.0.1:${PORT}/`);
}
bootstrap();
