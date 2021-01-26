import cloudinary from 'cloudinary';

const cloudinaryApp = new cloudinary.Cloudinary({cloud_name: "dlhxfrssh", secure: true});

export default cloudinaryApp;

// class Cloudinary {
//   constructor() {
//     this.url = "https://api.cloudinary.com/v1_1/demo/image/upload";
//   }

//   uploadImage() {
//     const files = document.querySelector("[type=file]").files;
//     const formData = new FormData();
//     files.forEach(file => {
//       formData.append('file', file);
//       formData.append("upload_preset", "docs_upload_example_us_preset");
//       console.log(formData);
//     });
//   }
// }

// const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const files = document.querySelector("[type=file]").files;
//   const formData = new FormData();

//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];
//     formData.append("file", file);
//     formData.append("upload_preset", "docs_upload_example_us_preset");

//     fetch(url, {
//       method: "POST",
//       body: formData
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {
//         document.getElementById("data").innerHTML += data;
//       });
//   }
// });