
//ketu e kemi incializu butonin me evente, psh kur interferojm ose klikojm
butonimajtas.addEventListener('click', function () {
    slider.scrollLeft -= 325;
})

butonidjathtas.addEventListener('click', function () {
    slider.scrollLeft += 325;
})



const search = document.getElementById("search");
const tedhanateproduktit = document.querySelectorAll(".produkti-detaje h2");

search.addEventListener("keyup", filtroproduktet);

function filtroproduktet(e) {
    const text = e.target.value.toLowerCase();
    tedhanateproduktit.forEach(function (product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block";
        } else {
            product.parentElement.parentElement.style.display = "none";
        }
    })
}
    

        alert("Mire se vini! Zbritja ne produktet tona zgjate deri me 15 prill."); 

    

 
