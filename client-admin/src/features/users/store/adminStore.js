import { create } from "zustand";
import { 
    getFields as getFieldsRequest,
    createField as createFieldRequest,
    updateField as updateFieldRequest,
    deleteField as deleteFieldRequest,
    deleteField
} from "../../../shared/apis";

export const useFieldsStore = create((set) => ({
    fields: [],
    loading: false,
    error: null, 

    getFields: async () =>{
        try{
            set({loading: true, error: null})
            const response = await getFieldsRequest();

            set({
                fields: response.data.data,
                loading: false,
            })
        }catch(err){
            set({
                error: err.response?.data?.message || "Error al listar canchas",
                loading: false,

            })
        }
    },

    createField: async (FormData) =>{
        try{
            set({loading: true, error: null})

            const response = await createFieldRequest(FormData);

            set({
                fields: [response.data.data, ...get().Fields()],
                loading: false,
            })
        }catch(err){
            set({
                loading: false,
                error: err.response?.data?.message || "Error al crear la cancha",
            })
        }
    },

    updateField: async (IdleDeadline, FormData) => {
        try{
            set({loading: true, error: null});
            const response = await updateFieldRequest(IdleDeadline, FormData);
            set({
                fields: get().fields.map((field) =>
                    fieldId._id === id ? response.data.data : field, 
                ),
                loading: false, 
            })
        }catch(err){
            set({
                loading: false,
                error: err.response?.data?.message || "Error al actualizar la cancha",
            }) 
        }
    },

    deleteField: async (id) =>{
        try{
            set({loading: true, error: null});
            await deleteFieldRequest(id);
            set({
                fields: get().fields.filter((field) => field._id !== id),
                loading: false,
            })
        }catch(err){
            set({
                loading: false,
                error: err.response?.data?.message || "Error al eliminar la cancha",
            }) 
        }
    }
}))