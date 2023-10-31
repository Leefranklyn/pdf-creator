import PDFDocument from "pdfkit";
import request from "request";
import fs from "fs";
// import cloudinary from "./cloudinary.js";
export const interviewPdfDoc = async (
  name,
  signatureImage,
  reg_number,
  track,
  institution,
  department,
  province,
  state
) => {
  const doc = new PDFDocument();

  const stream = doc.pipe(fs.createWriteStream("acceptance.pdf"));

//   const signature = fs.readFileSync(`${signatureImage}`);

  doc.font("Times-Roman", 11);

  const sendingTime = new Date().toLocaleString();

  doc.text(`${sendingTime}`, { align: "left" });
  doc.text(`${institution}`, { align: "left" });
  doc.text(`Department Of ${department}`, { align: "left" });
  doc.text(`${province}`, { align: "left" });
  doc.text(`${state}`, { align: "left", lineGap: 6 });

  doc.text(`Dear Sir/Madam`, {lineGap: 6});

  doc.text(
    `We acknowledge the receipt of introduction for Industrial Training ${track} in respect to ${name} with Matriculation Number ${reg_number} of the Department of ${department} to undergo his Industrial Training in our organisation`
  , {align: "center", lineGap: 5 });

  doc.text(`Kind Regards`, { align: "left", lineGap: 7 });


  request({ url: signatureImage, encoding: null }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const img =  Buffer.from(body);
      doc.image(img, 0, 0);
    }
  });
//   doc.image(`../../Pictures/Wallpapers/1143240.jpg`, {align: "left", cover: 100 }).rect(320, 15, 100 ,100);
  doc.text(`Bashir Sheidu`, { align: "left" });
  doc.text(`Chief Operations Officer`, { align: "left" });
  doc.text(`nHub Foundation & nHub Nigeria`, { align: "left" });
  doc.text('contact@nhubfoundation.org', { align: 'left' });
  doc.text(`08068640710`, { align: "left" });

  doc.end();
//   stream.on("finish",  async () => {
//     // const pdfPath = stream.path;

//     // const pdfBuffer = fs.readFileSync(pdfPath);

//     // const base64Pdf = pdfBuffer.toString("base64");

//     // const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dwinqwsit/raw/upload`;

//     // const formData = {
//     //   file: `../acceptance.pdf`,
//     //   api_key: "465226542981415",
//     //   upload_preset: "ddrlvqi6",
//     //   resource_type: "raw",
//     // };

//     //   fetch(cloudinaryUrl, {method: "Post", body: formData})
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     console.log(data);
//     //     const url = data.url;
//     //     console.log(url);
//     //   }).catch((error) => {
//     //     console.log(error)
//     //   });
//      await cloudinary.uploader.upload("../acceptance.pdf",    
//     // function(error, result) {
//     //     if(error) {
//     //         console.log(error)
//     //     }else {
//     //          result = pdfDoc.secure_url;
//     //          console.log(result)
//     //     }
//     // }
//     ).then(result=> console.log(result));
//   });
};
