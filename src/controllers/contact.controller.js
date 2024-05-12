import Contact from "../models/contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const createContact = asyncHandler(async (req, res) => {
    const { fullname, email, contact, budget, project } = req.body;

    if ([fullname, email, contact, budget, project].some(item => item?.trim() === "")) {
        throw new ApiError(400, "all fields are required");
    }

    const addContact = await Contact.create(
        {
            fullname,
            email,
            contact,
            budget,
            project
        }
    );

    if (!addContact) {
        throw new ApiError(401, "Error while creating contact")
    }

    return res.status(200).json(new ApiResponse(200, addContact, "sent successfully"));

})


const getAllContactDetails = asyncHandler(async (req, res) => {
    const allContact = await Contact.find({});

    if (!allContact) {
        throw new ApiError(401, " error while fetching")
    }

    return res.status(200).json(new ApiResponse(200, allContact, "fetched successfully"));
})

export { createContact, getAllContactDetails }