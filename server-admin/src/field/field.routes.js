import { Router } from "express";
import { createFiel, getField } from "./field.controller.js";
import { validateCreateField } from '../../middlewares/field-validator.js';
import { uploadFieldImage } from "../../middlewares/file-uploader.js";
import { cleanupUploadedFileOnFinish } from '../../middlewares/delete-file-on-error.js'

const router = Router();

router.get('/', getField);

router.post(
    '/',
    uploadFieldImage.single('image'),
    cleanupUploadedFileOnFinish,
    validateCreateField,
    createFiel
);

export default router;