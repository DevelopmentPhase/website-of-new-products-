ShowHtmlElement();

function ShowHtmlElement () {
  let producContainerElement = document.querySelector('.items_container');

let innerHtml = '';
productList.forEach((item) => {
  innerHtml += `
      <div class="item_div">
        <a href="#"><img src="${item.image}" alt="product image"></a>
        <div class="rating_div">
          ${item.rating.stars}
          <i class="fas fa-star star_color"></i>
          |
          ${item.rating.review_count}
        </div>
          <div class="inner_space">
            <div class="company_name">${item.company}</div>
            <div class="product_name">${item.item_name}</div>
            <div class="price">
              <div>
                <span class="current_price">Rs. ${item.current_price}</span>
                <span class="original_price">Rs.${item.original_price}</span>
                <span class="discount_price">(${item.discount_percentage}% off)</span>
              </div>    
              <div >
              <button class="add_bag" onclick="addToBag(${item.id})">Add To Bag</button>
              </div>
            </div>
          </div>
        </div>`;
}); 

producContainerElement.innerHTML = innerHtml;
}

