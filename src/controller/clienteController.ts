import { Request, Response } from "express";
import { SelectQueryBuilder } from "typeorm";
import { cliente } from "../entity/cliente";

import { AppDataSource } from "../data-source";


class clienteController{

    static getAll = async(req:Request, resp:Response) =>{
        const userRepository =AppDataSource.getRepository(cliente)
       let usuario; 
       try{
        usuario = await userRepository.find()
       }catch(error){
        resp.status(500).json({
            message: "Error al crear al cliente",
            error: error.message

        })
       }
       if(usuario.length > 0){
        return resp.send(usuario)
           
        }else{
        return resp.status(404).json({
            message: "Usuarios no existentes"

       })
     
    }

}
    static getById = async(req:Request, resp:Response) =>{
        const {cedula} = req.params
        const userRepository = AppDataSource.getRepository(cliente) 
        try{
            const usuarios = await userRepository.findOneByOrFail({cedula:parseInt(cedula)})
            resp.send(usuarios)

        }catch(error){
            resp.status(404).json({
                message: "Cliente no encontrado",
                error:error.message
            })
        }
       
    }


    static add = async(req:Request, resp:Response) =>{
        const {cedula,nombre,apellido1,apellido2,FechaNacimiento,Genero,Estado} = req.body
        
        const user = new cliente();
        user.cedula=cedula;
        user.nombre=nombre;
        user.apellido1=apellido1;
        user.apellido2=apellido2;
        user.FechaNacimiento=FechaNacimiento;
        user.Genero=Genero;
        user.Estado=Estado;

        const userRepository = AppDataSource.getRepository(cliente)
        try{
            await userRepository.save(user)
        } catch (error){
            return resp.status(500).json({
                message: "Error al crear al cliente",
                error: error.message

            })
        }
        return resp.status(200).json({
            message: "Cliente Registrado"

        })
       


    
    }

    
}


export default clienteController;