import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApostadorModule } from './apostador/apostador.module';

@Module({
  imports: [ApostadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
