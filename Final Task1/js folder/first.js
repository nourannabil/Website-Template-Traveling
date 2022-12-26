
const allImages = document.querySelectorAll(".card-destination img");

const newImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-%20lT6TcSB0vQ1r4MdN9NUcMtLT2jfKsnyzrnlAkCv-okumI80jMY9n-%20mNvEsGm4YF2Yk&usqp=CAU"

allImages.forEach(img => {
    img.addEventListener("click", (e1) => {
        e1.target.src = newImage;
    });
})
