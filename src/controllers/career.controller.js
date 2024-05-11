import Career from "../models/Career.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const sendCareerForm = asyncHandler(async (req, res) => {
    const { name, email, phone, appliedFor } = req.body;

    if ([name, email, phone, appliedFor].some(item => item?.trim() === "")) {
        throw new ApiError(400, "all fields are required")
    }

    const resumeLocalPath = req.file?.path;

    console.log(resumeLocalPath, req.file);

    if (!resumeLocalPath) {
        throw new ApiError(401, "resume is required");
    }

    const resume = await uploadOnCloudinary(resumeLocalPath);

    if (!resume) {
        throw new ApiError(500, "error while uploading resume")
    }

    const career = await Career.create(
        {
            name,
            email,
            phone,
            appliedFor,
            resume: resume.url
        }
    );

    if (!career) {
        throw new ApiError(401, "error while submitting form")
    }

    return res.status(200).json(new ApiResponse(200, career, "sumitted successfully"))
});

const getAllCareerDetails = asyncHandler(async (req, res) => {
    const career = await Career.find();

    if (!career) {
        throw new ApiError(401, "error while fetching career form data")
    }

    return res.status(200).json(new ApiResponse(200, career, "fetched successfully"));
})

export { sendCareerForm, getAllCareerDetails }