import { interviewPdfDoc } from "./acceptancepdf.js";

export const createPdf = async(req, res) => {
    try {
        const pdf = await interviewPdfDoc("Frank", "https://res.cloudinary.com/dnlcpajnz/image/upload/v1698353746/CwwTA/logo/cwwta_logo_wflasl.png", "3221096875", "Back-End", "School Of Hope", "Science", "Agabe", "Pateau State");
        console.log("Uploaded Successfully"),
        res.status(200).json({
            success: true,
            message: "PDF Created successfully",
            doc: pdf
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "An error Occured"
        })
    }
};