// const taxRate = 0.18;
// const shippingPrice = 15.0;
// const shippingFreePrice = 300;

window.addEventListener("load", () => {
  calculateCartPrice();
  // localStorage.setItem("taxRate" , taxRate)
  // localStorage.setItem("shippingPrice" , shippingPrice)
  // localStorage.setItem("shippingFreePrice" , shippingFreePrice)
});

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid fa-minus") {
    // alert("minus clicked");
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      calculateProductPrice(e.target);
    } else {
      if (
        confirm(
          `${
            e.target.closest(".product-info").querySelector("h2").innerText
          } product will me removed!`
        )
      ) {
        e.target.closest(".product").remove();
      }
    }
    calculateCartPrice();
  } else if (e.target.classList.contains("fa-plus")) {
    e.target.parentElement.querySelector(".quantity").innerText++;
    calculateProductPrice(e.target);
    calculateCartPrice();
  } else if (e.target.getAttribute("class") == "remove-product") {
    if (
      confirm(
        `${
          e.target.closest(".product-info").querySelector("h2").innerText
        } product will me removed!`
      )
    ) {
      e.target.closest(".product").remove();
    }

    calculateCartPrice();
  } else {
    alert("other element clicked");
  }
});

const calculateProductPrice = (target) => {
  const productInfoDiv = target.closest(".product-info");
  console.log(productInfoDiv);
  const price = productInfoDiv.querySelector(
    "div.product-price strong"
  ).innerText;
  const quantity = productInfoDiv.querySelector("p.quantity").innerText;
  productInfoDiv.querySelector("div.product-line-price").innerText = (
    price * quantity
  ).toFixed(2);
};
const calculateCartPrice = () => {
  const ProductLinePriceDivs = document.querySelectorAll(".product-line-price");
  // const ProductLinePriceDivs = documentg.getElementsByClassName("product-line-price")

  let subtotal = 0;
  ProductLinePriceDivs.forEach((div) => {
    subtotal += parseFloat(div.innerText);
    const taxPrice = subtotal * localStorage.getItem("taxRate");
    const shippingPrice = parseFloat(
      subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
        ? localStorage.getItem("shippingPrice")
        : 0
    );

    const totalPrice = subtotal + taxPrice + shippingPrice;

    document.querySelector("#cart-subtotal").lastElementChild.innerText =
      subtotal.toFixed(2);
    document.getElementById("cart-tax").children[1].innerText =
      taxPrice.toFixed(2);
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shippingPrice.toFixed(2)
    
    document.querySelector("#cart-total p:last-child").innerText =
      totalPrice.toFixed(2);
  });
};
