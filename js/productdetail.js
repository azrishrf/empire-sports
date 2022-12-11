// increase or decrease quantity item
let quantity = 1;
function increase() {
    if (quantity == 10) {
        alert("You are not allowed to select more than 10 quantities");
        return;
    }
    quantity += 1;
    document.querySelector(".box").value = quantity;
}

function decrease() {
    if (quantity == 0) {
        return;
    }
    quantity -= 1;
    document.querySelector(".box").value = quantity;
}

// wishlist toggle
function toggleHeart() {
    document.querySelector("#wishlist-item").classList.toggle("bi-heart");
    document.querySelector("#wishlist-item").classList.toggle("bi-heart-fill");
}

// change main image
function changeMainImage(imglink) {
    document.querySelector("img.image-big").src = imglink;
}

// switch information in page product detail
let whatOpen = "description";

function openDescription() {
    document.querySelector(".description-detail").style.display = "block";
    document.querySelector(".shoes-information-detail").style.display = "none";
    document.querySelector(".review").style.display = "none";
    whatOpen = "description";
    document.querySelector(".review-button").style.backgroundColor = "#c4c4c4";
    document.querySelector(".detail-button").style.backgroundColor = "#c4c4c4";
    document.querySelector(".description-button").style.backgroundColor =
        "#9f0000";
}

function openInformation() {
    document.querySelector(".description-detail").style.display = "none";
    document.querySelector(".shoes-information-detail").style.display = "block";
    document.querySelector(".review").style.display = "none";
    whatOpen = "information";
    document.querySelector(".description-button").style.backgroundColor =
        "#c4c4c4";
    document.querySelector(".review-button").style.backgroundColor = "#c4c4c4";
    document.querySelector(".detail-button").style.backgroundColor = "#9f0000";
}

function openReview() {
    document.querySelector(".description-detail").style.display = "none";
    document.querySelector(".shoes-information-detail").style.display = "none";
    document.querySelector(".review").style.display = "block";
    whatOpen = "review";
    document.querySelector(".description-button").style.backgroundColor =
        "#c4c4c4";
    document.querySelector(".detail-button").style.backgroundColor = "#c4c4c4";
    document.querySelector(".review-button").style.backgroundColor = "#9f0000";
}

let size = "";

// category shoes
function setShoesSize(shoesSize) {
    size = shoesSize;

    document.querySelector("#size5").style.backgroundColor = "white";
    document.querySelector("#size5").style.color = "black";
    document.querySelector("#size5").style.border = "1px solid #929292";
    document.querySelector("#size6").style.backgroundColor = "white";
    document.querySelector("#size6").style.color = "black";
    document.querySelector("#size6").style.border = "1px solid #929292";
    document.querySelector("#size7").style.backgroundColor = "white";
    document.querySelector("#size7").style.color = "black";
    document.querySelector("#size7").style.border = "1px solid #929292";
    document.querySelector("#size8").style.backgroundColor = "white";
    document.querySelector("#size8").style.color = "black";
    document.querySelector("#size8").style.border = "1px solid #929292";
    document.querySelector("#size9").style.backgroundColor = "white";
    document.querySelector("#size9").style.color = "black";
    document.querySelector("#size9").style.border = "1px solid #929292";

    document.querySelector("#size" + size).style.backgroundColor = "#9f0000";
    document.querySelector("#size" + size).style.color = "white";
    document.querySelector("#size" + size).style.border = "1px solid #9f0000";
}

// category cloth
function setClothSize(clothSize) {
    size = clothSize;
    document.querySelector("#sizeS").style.backgroundColor = "white";
    document.querySelector("#sizeS").style.color = "black";
    document.querySelector("#sizeS").style.border = "1px solid #929292";
    document.querySelector("#sizeM").style.backgroundColor = "white";
    document.querySelector("#sizeM").style.color = "black";
    document.querySelector("#sizeM").style.border = "1px solid #929292";
    document.querySelector("#sizeL").style.backgroundColor = "white";
    document.querySelector("#sizeL").style.color = "black";
    document.querySelector("#sizeL").style.border = "1px solid #929292";
    document.querySelector("#sizeXL").style.backgroundColor = "white";
    document.querySelector("#sizeXL").style.color = "black";
    document.querySelector("#sizeXL").style.border = "1px solid #929292";

    document.querySelector("#size" + size).style.backgroundColor = "#9f0000";
    document.querySelector("#size" + size).style.color = "white";
    document.querySelector("#size" + size).style.border = "1px solid #9f0000";
}

// Add product into localStorage after click add to cart button
function addtocart(productname, productimg, productcategory, productprice) {
    alert(
        "Successfully added " +
            productname +
            ", quantity " +
            quantity +
            " size " +
            size
    );

    // dptkan array dalam localstorage
    // kalau tkde biarkan array tu kosong
    let cartlist = [];
    if (window.localStorage.getItem("cartlist")) {
        cartlist = JSON.parse(window.localStorage.getItem("cartlist"));
    }

    // buat producttoadded
    const productToAdded = {
        productId: self.crypto.randomUUID(),
        productImg: productimg,
        productName: productname,
        productCategory: productcategory,
        productSize: size,
        productQuantity: quantity,
        productPrice: productprice,
        productSubtotal: 0,
    };

    productToAdded.productSubtotal =
        productToAdded.productPrice * productToAdded.productQuantity;

    // merge dengan array tadi
    cartlist = [...cartlist, productToAdded];

    console.log(cartlist);

    // simpan dalam localstorage
    window.localStorage.setItem("cartlist", JSON.stringify(cartlist));
}
