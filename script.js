async function handleFun() {
  try {
    await getApi();
    const order = await new Promise((resolve) => {
      setTimeout(() => {
        const burgers = [
          "Cheeseburger",
          "Hamburger",
          "Bacon Burger",
          "Veggie Burger",
          "Chicken Burger",
        ];
        const selectedBurgers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          selectedBurgers.push(burgers[randomIndex]);
        }
        resolve({ burgers: selectedBurgers });
      }, 2500);
    });
    console.log("Order:", order);
    const orderStatus = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
    console.log("Order Status:", orderStatus);
    const paymentStatus = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
    console.log("Order Status:", paymentStatus);
    await new Promise((resolve) => {
      setTimeout(() => {
        alert("Thank you for eating with us today!");
        resolve();
      }, 0);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getApi() {
  let url = `https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`;
  const response = await fetch(url, { method: "get" });
  const result = await response.json();
  getMenu(result);
}
const conatiner_image = document.getElementById("conatiner-image");
function getMenu(item) {
  item.forEach((e) => {
    const div = document.createElement("div");
    div.className = "images";
    div.innerHTML = ` <img src=${e.imgSrc} alt="" />
    <div class="food-details">
      <div class="food-np">
        <p class="food-name">${e.name}</p>
        <p>$${e.price}</p>
      </div>
      <button>+</button>
    </div>`;
    conatiner_image.append(div);
  });
}

function menu() {
  const banner = document.getElementById("banner");
  banner.style.display = "none";
  conatiner_image.className = "gridclass";
}

handleFun();
