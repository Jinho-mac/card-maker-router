class ImageService {
  constructor() {
    this.url = "https://api.cloudinary.com/v1_1/dlhxfrssh/image/upload";
  }

  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ofmrldro");
    const posting = await fetch(this.url, {
      method: "POST",
      body: formData
    });
    const result = await posting.json();
    console.log(result);
    return result;
  }
}

export default ImageService;
