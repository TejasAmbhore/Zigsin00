const images = document.querySelectorAll(".col img");
let imgSrc;
// getting images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //runing the modal function
        imgModal(imgSrc);
    });
});
//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //adding the modal to the main section or the parent element
    document.querySelector(".container").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fa fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};