import { IsNotEmpty, IsString } from "class-validator";

export class CreateApostadorDto {
    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;
}
