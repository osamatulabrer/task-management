
import * as yup from "yup";

export const popupValidation = yup.object({
    title:yup.string().required().min(6).max(30),
    description:yup.string().required(),
    assignTo:yup.string().required(),
    priority:yup.string().required()
   }).required();