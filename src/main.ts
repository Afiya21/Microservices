import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,

    {
      transport: Transport.GRPC,
      options: {
        package: 'User',
        protoPath: join(__dirname, 'proto/test.proto'),
        url: '0.0.0.0:5000',
      },
    },
  );
  await app.listen();
}
bootstrap();
