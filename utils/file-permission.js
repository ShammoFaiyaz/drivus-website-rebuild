import { message } from "antd";

export const beforeFileUpload = (file, options = {}) => {
  return new Promise((resolve, reject) => {
    // console.log(file.type, file.mimetype, options);

    // .jpeg, .jpg, .png, .tiff, .webp, .pdf, .docx, .rtf, .wpd, .xls, .xlsx, .csv, .odt, .ods
    const imgTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/bmp",
    ];
    const pdfTypes = ["application/pdf"];

    const docTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/msword",
      "application/rtf",
    ];
    const otherTypes = ["image/tiff", "text/csv"];

    const allowedTypes = [...imgTypes, ...pdfTypes];

    if (options.allowAll) {
      allowedTypes.push(...docTypes);
      allowedTypes.push(...otherTypes);
    }

    if (!allowedTypes.includes(file.type)) {
      message.error("File type is not allowed.");
      return reject(false);
    }

    // Check the file size
    const maxFileSize = 5 * 1024 * 1024; // 5MB limit
    if (file.size > maxFileSize) {
      message.error("File must be smaller than 5MB!");
      return reject(false);
    }

    resolve(true);
  });
};
