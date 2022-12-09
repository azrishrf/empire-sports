// increase or decrease quantity item

function increase(price, id) {
    let quantity = parseInt(
        document.querySelector("#num-quantity-" + id).value
    );
    if (quantity == 10) {
        alert("You are not allowed to select more than 10 quantities");
        return;
    }
    quantity += 1;

    let discount = 0;
    if ((totalproduct) => 5 && totalproduct <= 10) {
        discount = quantity * price * 0.05;
    } else if (totalproduct > 10) {
        discount = quantity * price * 0.15;
    }
    document.querySelector("#num-quantity-" + id).value = quantity;
    document.querySelector("#productSubtotalCart-" + id).textContent =
        "RM" + quantity * price;
    document.querySelector("#productSubtotalSummary").textContent =
        "RM" + quantity * price;
    document.querySelector("#discount").textContent = "RM" + discount;
    document.querySelector("#totalprice").textContent =
        "RM" + (quantity * price - discount);
}

function decrease(price, id) {
    let quantity = parseInt(
        document.querySelector("#num-quantity-" + id).value
    );
    if (quantity == 0) {
        return;
    }
    quantity -= 1;

    let discount = 0;
    if ((totalproduct) => 5 && totalproduct <= 10) {
        discount = quantity * price * 0.05;
    } else if (totalproduct > 10) {
        discount = quantity * price * 0.15;
    }
    document.querySelector("#num-quantity-" + id).value = quantity;
    document.querySelector("#productSubtotalCart-" + id).textContent =
        "RM" + quantity * price;
    document.querySelector("#productSubtotalSummary").textContent =
        "RM" + quantity * price;
    document.querySelector("#discount").textContent = "RM" + discount;
    document.querySelector("#totalprice").textContent =
        "RM" + (quantity * price - discount);
}

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
                    width="150px"
                />
                <div class="detail">
                    <p class="name">
                        <b
                            >${product.productName}</b
                        >
                    </p>
                    <p class="category">${product.productCategory}</p>
                    <i class="bi bi-trash-fill icon-trash"></i>
                </div>
            </td>
            <td class="row2-b">${product.productSize}</td>
            <td class="row2-b">
                <div class="quantity-box">
                    <button
                        class="bi bi-dash dash-button"
                        onclick="decrease(${product.productPrice}, '${product.productId}')"
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
                        onclick="increase(${product.productPrice}, '${product.productId}')"
                    ></button>
                </div>
            </td>
            <td class="row2-b"><b id="productSubtotalCart-${product.productId}">RM${product.productSubtotal}</b></td>
        </tr>
        `;
        subtotalprice += product.productSubtotal;
        totalproduct += product.productQuantity;
    });

    let discount = 0;
    if ((totalproduct) => 5 && totalproduct <= 10) {
        discount = subtotalprice * 0.05;
    } else if (totalproduct > 10) {
        discount = subtotalprice * 0.15;
    }
    containerSummaryCheckout.innerHTML += `
    <div class="summary">
        <h4>SUMMARY</h4>
        <div class="subtotal">
            <p>Subtotal</p>
            <p id="productSubtotalSummary">RM${subtotalprice}</p>
        </div>
        <div class="shipping">
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <div class="shipping">
            <p>Discount</p>
            <p id="discount">${discount}</p>
        </div>
        <div class="total">
            <p><b>Estimated Total Price</b></p>
            <p><b id="totalprice">RM${subtotalprice - discount}</b></p>
        </div>
    </div>
    <div class="checkout">
        <a href="checkout.html" class="checkout-button">
            <i class="bi bi-basket3-fill icon"></i>
            <p class="text">&nbsp; CHECKOUT</p>
        </a>
    </div>
    `;
}
