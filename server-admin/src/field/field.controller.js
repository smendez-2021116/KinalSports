import {createFieldRecord, fetchFields} from './field.service.js'

export const createFiel = async(req, res) =>{
    try{
        const field = await createFieldRecord({
            fieldData: req.body,
            file: req.file
        })
        res.status(201).json({
            sucess:true,
            message: 'Cancha Creada Exitosamente',
            data: field
        })
    }catch(err){
        res.status(500).json({
            sucess:false,
            message:'Error al Crear la Cancha',
            error: err.message
        })
    }
}

export const getField = async (req, res) => {
    try{
        const {page=1, limit=10, isActive=true} = req.query;
        const {fields, pagination} = await fetchFields({page, limit, isActive})

        res.status(200).json({
            sucess: true,
            message: 'Canchas Listadas Exitosamente',
            data: fields,
            pagination
        })
    }catch(err){
        res.status(500).json({
            sucess: false,
            message: 'Error al Listar las Canchas Registradas',
            error: err.message
        })
    }
}