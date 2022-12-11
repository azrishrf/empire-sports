// increase quantity item
function increase(price, id) {
    let quantity = parseInt(
        document.querySelector("#num-quantity-" + id).value
    );
    if (quantity == 10) {
        alert("You are not allowed to select more than 10 quantities");
        return;
    }
    quantity += 1;
    let theproduct = JSON.parse(window.localStorage.getItem("cartlist")).filter(
        (product) => product.productId === id
    )[0];
    theproduct.productQuantity = quantity;

    let discount = 0;

    let newcartlist = JSON.parse(
        window.localStorage.getItem("cartlist")
    ).filter((product) => product.productId !== id);

    newcartlist = [...newcartlist, theproduct];
    window.localStorage.setItem("cartlist", JSON.stringify(newcartlist));

    let subtotal = 0;
    let totalquantity = 0;
    newcartlist.forEach((product) => {
        subtotal += product.productQuantity * product.productPrice;
        totalquantity += product.productQuantity;
    });

    if (totalquantity >= 5 && totalquantity <= 10) {
        discount = subtotal * 0.05;
    } else if (totalquantity > 10) {
        discount = subtotal * 0.15;
    }

    let shippingfee = 0;
    if (subtotal < 100) {
        shippingfee = 10;
    }

    document.querySelector("#num-quantity-" + id).value = quantity;
    document.querySelector("#productSubtotalCart-" + id).textContent =
        "RM" + (quantity * price).toFixed(2);
    document.querySelector("#productSubtotalSummary").textContent =
        "RM" + subtotal.toFixed(2);
    document.querySelector("#discount").textContent =
        "RM" + discount.toFixed(2);
    document.querySelector("#shipping").textContent =
        "RM" + shippingfee.toFixed(2);
    document.querySelector("#totalprice").textContent =
        "RM" + (subtotal - discount + shippingfee).toFixed(2);
}

// Decrease quantity item
function decrease(price, id) {
    let quantity = parseInt(
        document.querySelector("#num-quantity-" + id).value
    );
    if (quantity == 1) {
        deleteProduct(id);
        return;
    }
    quantity -= 1;
    let theproduct = JSON.parse(window.localStorage.getItem("cartlist")).filter(
        (product) => product.productId === id
    )[0];
    theproduct.productQuantity = quantity;

    let discount = 0;

    let newcartlist = JSON.parse(
        window.localStorage.getItem("cartlist")
    ).filter((product) => product.productId !== id);

    newcartlist = [...newcartlist, theproduct];
    window.localStorage.setItem("cartlist", JSON.stringify(newcartlist));

    let subtotal = 0;
    let totalquantity = 0;
    newcartlist.forEach((product) => {
        subtotal += product.productQuantity * product.productPrice;
        totalquantity += product.productQuantity;
    });

    if (totalquantity >= 5 && totalquantity <= 10) {
        discount = subtotal * 0.05;
    } else if (totalquantity > 10) {
        discount = subtotal * 0.15;
    }

    let shippingfee = 0;
    if (subtotal < 100) {
        shippingfee = 10;
    }

    document.querySelector("#num-quantity-" + id).value = quantity;
    document.querySelector("#productSubtotalCart-" + id).textContent =
        "RM" + (quantity * price).toFixed(2);
    document.querySelector("#productSubtotalSummary").textContent =
        "RM" + subtotal.toFixed(2);
    document.querySelector("#discount").textContent =
        "RM" + discount.toFixed(2);
    document.querySelector("#shipping").textContent =
        "RM" + shippingfee.toFixed(2);
    document.querySelector("#totalprice").textContent =
        "RM" + (subtotal - discount + shippingfee).toFixed(2);
}

// Adding products into table from localStorage
const containerCartTable = document.querySelector(".cart-table");
const containerSummaryCheckout = document.querySelector(".summary-checkout");
let cartlist = [];
if (window.localStorage.getItem("cartlist")) {
    cartlist = JSON.parse(window.localStorage.getItem("cartlist"));
}

if (cartlist) {
    let subtotalprice = 0;
    let totalproduct = 0;
    cartlist.forEach((product) => {
        containerCartTable.innerHTML += `
        <tr>
            <td class="row2-a">
                <img
                    src="${product.productImg}"
                    width="130px"
                />
                <div class="detail">
                    <p class="name">
                        <b
                            >${product.productName}</b
                        >
                    </p>
                    <p class="stock">IN STOCK</p>
                    <p class="category">${product.productCategory}</p>
                    <i class="bi bi-trash-fill icon-trash" onclick="deleteProduct('${
                        product.productId
                    }');"></i>
                </div>
            </td>
            <td class="row2-b">${product.productSize}</td>
            <td class="row2-b">
                <div class="quantity-box">
                    <button
                        class="bi bi-dash dash-button"
                        onclick="decrease(${product.productPrice}, '${
            product.productId
        }')"
                    ></button>
                    <input
                        type="text"
                        name="num-quantity"
                        id="num-quantity-${product.productId}"
                        class="box"
                        value="${product.productQuantity}"
                        readonly
                    />
                    <button
                        class="bi bi-plus-lg plus-button"
                        onclick="increase(${product.productPrice}, '${
            product.productId
        }')"
                    ></button>
                </div>
            </td>
            <td class="row2-b"><b id="productSubtotalCart-${
                product.productId
            }">RM${product.productSubtotal.toFixed(2)}</b></td>
        </tr>
        `;
        subtotalprice += product.productSubtotal;
        totalproduct += product.productQuantity;
    });
    // Create discount
    let discount = 0;
    if (totalproduct >= 5 && totalproduct <= 10) {
        discount = subtotalprice * 0.05;
    } else if (totalproduct > 10) {
        discount = subtotalprice * 0.15;
    }

    // Create shipping fee
    let shippingfee = 0;
    if (subtotalprice < 100) {
        shippingfee = 10;
    }
    containerSummaryCheckout.innerHTML += `
    <div class="summary">
        <h4>SUMMARY</h4>
        <div class="subtotal">
            <p>Subtotal</p>
            <p id="productSubtotalSummary">RM${subtotalprice.toFixed(2)}</p>
        </div>
        <div class="shipping">
            <p>Shipping Fee</p>
            <p id="shipping">RM${shippingfee.toFixed(2)}</p>
        </div>
        <div class="shipping">
            <p>Discount</p>
            <p id="discount">RM${discount.toFixed(2)}</p>
        </div>
        <div class="total">
            <p><b>Estimated Total Price</b></p>
            <p><b id="totalprice">RM${(
                subtotalprice +
                shippingfee -
                discount
            ).toFixed(2)}</b></p>
        </div>
    </div>
    <div class="checkout">
        <a href="" class="checkout-button">
            <i class="bi bi-basket3-fill icon"></i>
            <p class="text">&nbsp; CHECKOUT</p>
        </a>
    </div>
    `;
}

// Delete product from localStorage and table
function deleteProduct(productId) {
    let newcartlist = JSON.parse(
        window.localStorage.getItem("cartlist")
    ).filter((product) => product.productId !== productId);

    window.localStorage.setItem("cartlist", JSON.stringify(newcartlist));

    window.location.href = "shopping-cart.html";
}
