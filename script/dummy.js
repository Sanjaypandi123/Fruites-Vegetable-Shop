function createCard() {
        cartArray = JSON.parse(localStorage.getItem("cartArray")) || []

        let duplicateCard = ''
        cartArray.forEach(element => {
            duplicateCard+=`
            <div class="cartBox">
            <div class="left">
                <div class="card" data-id="2">
                    <div class="card-top">
                        <b class="discount">
                            <p class="offer">50</p>% off
                        </b>
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <img src="./card-img/games/GTA-5.jpg" alt="">
                        <div class="content">
                            <h2 class="cardProductName">${element.name}</h2>
                            <h4 class="cardCategory">Action</h4>
                        </div>
                        <div class="icons">
                            <div class="card-adc it">
                                <button type="button" id="addtocart"><i class="fa-solid fa-cart-plus"></i></button>
                            </div>
                            <div class="card-fav it">
                                <button><i class="fa-solid fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="card-bottom">

                        <div class="pri">
                            <p>$<del class="price">200</del></p>
                            <b>$<span class="offerPrice">100</span></b>
                        </div>
                        <button>Buy Now</button>


                    </div>
                </div>
                
            </div>
            <div class="right">
                    <button type="button" id="cartRemove" onclick="cardRemove(${element.id})">Remove</button>
            </div>
        </div>
            `


        });
// debugger;
    document.querySelector("#addcrt").innerHTML = duplicateCard
    // console.log(duplicateCard);
    

    // console.log(duplicateCard);
    

        // console.log(cartArray)
        

    }

    createCard()
    // debugger
    function cardRemove(prid){
        debugger;
        let cartArray = JSON.parse(localStorage.getItem("cartArray")) || []
         cartArray = cartArray.filter((e)=>{
            if(e.id != prid){
                return e
            }
        })
        localStorage.setItem("cartArray", JSON.stringify(cartArray));
        createCard()
    }