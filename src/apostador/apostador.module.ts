import { Module } from '@nestjs/common';
import { ApostadorService } from './apostador.service';
import { ApostadorController } from './apostador.controller';

@Module({
  controllers: [ ApostadorController ],
  providers: [ ApostadorService ]
})
export class ApostadorModule {}
