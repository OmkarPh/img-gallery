let uploadedImage = document.getElementById("uploadedImage");
let addImage = document.getElementById("addImage");
let galleryItems = document.getElementById("galleryItems");

addImage.onclick = e => {
    let file = uploadedImage.files[0]
    if(!file){
        alert("Upload image first !")
        return;
    }
    galleryItems.innerHTML += `<img src="${window.URL.createObjectURL(file)}" />`;
    uploadedImage.value = '';
}