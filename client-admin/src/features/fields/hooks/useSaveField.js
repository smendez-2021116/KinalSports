import { useFieldsStore } from "../../users/store/adminStore";

export const useSaveField = () => {
    const createField = useFieldsStore((state) => state.createField);

    const useSaveField = async (data) => {
        const formData = new formData();

        formData.append("fieldName", data.fieldName);
        formData.append("description", data.description);
        formData.append("fieldType", data.fieldType);
        formData.append("pricePerHour", data.pricePerHour);
        formData.append("capacity", data.capacity);

        if(data.photo?.lenght > 0){
            formData.append("image", data.photo[0]);
        }

        await createField(formData);
    }

    return { saveField }
}