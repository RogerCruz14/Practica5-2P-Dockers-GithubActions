import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApostadorDto } from './dto/create-apostador.dto';
import { UpdateApostadorDto } from './dto/update-apostador.dto';
import { Apostador } from './entities/apostador.entity';

@Injectable()
export class ApostadorService {

  private apostadors: Apostador[] = [
    {
      id:1, identificacion:'1350616437' , nombre: 'Roger', estado:true
    },
    {
      id:2, identificacion:'1350626346' , nombre: 'Cruz', estado:true
    },
  ]

  create(createEstudianteDto: CreateApostadorDto) {
    const apostador = new Apostador();
    apostador.id=  Math.max( ... this.apostadors.map(elemento => elemento.id),0 )+1 ;
    apostador.nombre= createEstudianteDto.nombre;
    this.apostadors.push(apostador);
    return apostador;
  }

  findAll() : Apostador[] {
    return this.apostadors;
  }

  findOne(id: number) {
    const apostador =  this.apostadors.find(apostador=> apostador.id===id);
    if (!apostador) throw new NotFoundException(`ID ${id} not found`)
    return apostador;
  }

  update(id: number, updateEstudianteDto: UpdateApostadorDto) {
    const { identificacion, nombre, estado } = updateEstudianteDto;
    const apostador = this.findOne(id);
    if (identificacion) apostador.identificacion = identificacion;
    if (nombre) apostador.nombre = nombre;
    if (estado!= undefined) apostador.estado = estado;

    this.apostadors =  this.apostadors.map( elemento=> {
      if (elemento.id===id) return apostador;
      return elemento;
    } )

    return apostador;

  }

  remove(id: number) {
    this.findOne(id);
    this.apostadors =  this.apostadors.filter(elemento=> elemento.id!== id);
  }
}
