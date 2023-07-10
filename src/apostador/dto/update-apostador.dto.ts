import { PartialType } from '@nestjs/mapped-types';
import { CreateApostadorDto } from './create-apostador.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateApostadorDto extends PartialType(CreateApostadorDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
