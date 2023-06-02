import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class cliente{
    @PrimaryColumn()
    cedula:number; 
    @Column()
    nombre:string;
    @Column()
    apellido1:string;
    @Column()
    apellido2:string;
    @Column()
    FechaNacimiento:string;
    @Column()
    Genero: string;
    @Column()
    Estado: boolean;


}