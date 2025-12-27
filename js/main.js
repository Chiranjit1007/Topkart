/*  ---------------------------------------------------
    Template Name: Fashi
    Description: Fashi eCommerce HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Hero Slider
    --------------------*/
    $(".hero-items").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*------------------
        Product Slider
    --------------------*/
   $(".product-slider").owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        items: 4,
        dots: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    /*------------------
       logo Carousel
    --------------------*/
    $(".logo-carousel").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        items: 5,
        dots: false,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        mouseDrag: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 5,
            }
        }
    });

    /*-----------------------
       Product Single Slider
    -------------------------*/
    $(".ps-slider").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 3,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });
    
    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end

    console.log(timerdate);
    

    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

	$("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
    });

        
    /*----------------------------------------------------
     Language Flag js 
    ----------------------------------------------------*/
    $(document).ready(function(e) {
    //no use
    try {
        var pages = $("#pages").msDropdown({on:{change:function(data, ui) {
            var val = data.value;
            if(val!="")
                window.location = val;
        }}}).data("dd");

        var pagename = document.location.pathname.toString();
        pagename = pagename.split("/");
        pages.setIndexByValue(pagename[pagename.length-1]);
        $("#ver").html(msBeautify.version.msDropdown);
    } catch(e) {
        // console.log(e);
    }
    $("#ver").html(msBeautify.version.msDropdown);

    //convert
    $(".language_drop").msDropdown({roundedBorder:false});
        $("#tech").data("dd");
    });
    /*-------------------
		Range Slider
	--------------------- */
	var rangeSlider = $(".price-range"),
		minamount = $("#minamount"),
		maxamount = $("#maxamount"),
		minPrice = rangeSlider.data('min'),
		maxPrice = rangeSlider.data('max');
	    rangeSlider.slider({
		range: true,
		min: minPrice,
        max: maxPrice,
		values: [minPrice, maxPrice],
		slide: function (event, ui) {
			minamount.val('$' + ui.values[0]);
			maxamount.val('$' + ui.values[1]);
		}
	});
	minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*-------------------
		Radio Btn
	--------------------- */
    $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").on('click', function () {
        $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").removeClass('active');
        $(this).addClass('active');
    });
    
    /*-------------------
		Nice Select
    --------------------- */
    $('.sorting, .p-show').niceSelect();

    /*------------------
		Single Product
	--------------------*/
	$('.product-thumbs-track .pt').on('click', function(){
		$('.product-thumbs-track .pt').removeClass('active');
		$(this).addClass('active');
		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product-big-img').attr('src');
		if(imgurl != bigImg) {
			$('.product-big-img').attr({src: imgurl});
			$('.zoomImg').attr({src: imgurl});
		}
	});

    $('.product-pic-zoom').zoom();
    
    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
	proQty.prepend('<span class="dec qtybtn">-</span>');
	proQty.append('<span class="inc qtybtn">+</span>');
	proQty.on('click', '.qtybtn', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});

})(jQuery);
/* main.js — updated: keeps existing template code + cart/wishlist logic */

/* ----------------- keep original jQuery template code above this line -----------------
   (the top part of your main.js with carousels, preloader, etc.)
   If you already have that content, leave it intact. Below code is appended/merged.
------------------------------------------------------------------------------------*/

(function(){
  // keys
  const CART_KEY = 'topkart_cart_v1';
  const WISH_KEY = 'topkart_wish_v1';
  // Reset cart count to 0 on first load (optional)
localStorage.setItem(CART_KEY, JSON.stringify([]));

  // helpers
  function read(key){ try { return JSON.parse(localStorage.getItem(key)) || []; } catch(e){ return []; } }
  function write(key, data){ localStorage.setItem(key, JSON.stringify(data)); }

  // toast
  function toast(msg){
    const t = document.createElement('div');
    t.className = 'toast-msg';
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(()=> t.classList.add('show'));
    setTimeout(()=> {
      t.classList.remove('show');
      setTimeout(()=> t.remove(), 300);
    }, 1800);
  }

  // update header cart count(s)
  function renderCartCount(){
    const cart = read(CART_KEY);
    const count = cart.reduce((s,p)=> s + Number(p.qty||1), 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
  }

  // add product to cart (product is {id,name,price,img,qty?})
  function addToCartObj(prod, qty = 1){
    const cart = read(CART_KEY);
    const idx = cart.findIndex(p => p.id === prod.id);
    if(idx > -1){
      cart[idx].qty = (cart[idx].qty || 1) + qty;
    } else {
      cart.push(Object.assign({}, prod, { qty: qty }));
    }
    write(CART_KEY, cart);
    renderCartCount();
    toast(`${prod.name} added to cart 🛒`);
    renderCartPage();
  }

  // toggle wishlist (product object, icon element optional)
  function toggleWishlistObj(prod, iconEl){
  let wish = read(WISH_KEY);
  const found = wish.find(p => p.id === prod.id);
  if(found){
    // remove from wishlist
    wish = wish.filter(p => p.id !== prod.id);
    if(iconEl){
      iconEl.style.color = '';
      iconEl.classList.add('active');
    }
    toast('Removed from wishlist 💔');
  } else {
    // add to wishlist
    wish.push(Object.assign({}, prod));
    if(iconEl){
      iconEl.style.color = 'red';
      iconEl.classList.remove('active');
    }
    toast('Added to wishlist ❤️');
  }
  write(WISH_KEY, wish);
}


  // read product data from .product-item element
  function productFromEl(el){
    return {
      id: el.getAttribute('data-id') || el.dataset.id || (el.querySelector('img')?.src || '') ,
      name: el.getAttribute('data-name') || el.dataset.name || (el.querySelector('h5, h3, h4')?.innerText || 'Product'),
      price: parseFloat(el.getAttribute('data-price') || el.dataset.price || '0') || 0,
      img: el.getAttribute('data-img') || el.dataset.img || (el.querySelector('img')?.src || '')
    };
  }

  // bind product grid buttons on index / sliders
  function bindProductButtons(){
    document.querySelectorAll('.product-item').forEach(pi => {
      const prod = productFromEl(pi);

      // heart icon(s) — templates use .icon_heart_alt, could also be .fa-heart
      const heart = pi.querySelector('.icon_heart_alt, .icon_heart, .fa-heart');
      if(heart){
        heart.style.cursor = 'pointer';
        heart.addEventListener('click', function(e){
          e.preventDefault();
          toggleWishlistObj(prod, this);
          // toggle visual classes: prefer template classes icon_heart_alt <-> icon_heart
          if(this.classList.contains('icon_heart_alt')){
            this.classList.remove('icon_heart_alt'); this.classList.add('icon_heart');
            this.style.color = 'red';
          } else if(this.classList.contains('icon_heart')){
            this.classList.remove('icon_heart'); this.classList.add('icon_heart_alt');
            this.style.color = '';
          } else { // fallback toggle color
            this.classList.toggle('active');
            this.style.color = this.classList.contains('active') ? 'red' : '';
          }
        });
      }

      // add-to-cart element (templates use .add-to-cart anchor or .w-icon a)
      const addBtn = pi.querySelector('.add-to-cart, .w-icon a, .w-icon.active a, .icon_bag_alt, a.add-cart');
      if(addBtn){
        addBtn.addEventListener('click', function(e){
          e.preventDefault();
          addToCartObj(prod, 1);
        });
      }
    });
  }

  /* ----------- Wishlist page rendering ------------- */
  function renderWishlistPage(){
    const el1 = document.getElementById('wishlist-items'); // older variant
    const el2 = document.getElementById('wishlist-grid');  // alternative variant
    const container = el1 || el2;
    if(!container) return; // not on wishlist page

    const list = read(WISH_KEY);
    container.innerHTML = '';
    if(list.length === 0){
      container.innerHTML = '<p class="empty-cart">Your wishlist is empty 💔</p>';
      return;
    }

    // If grid container — render cards; if list container — render simple rows
    if(el2){ // card grid
      list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'wishlist-card';
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}">
          <div class="info">
            <h3>${p.name}</h3>
            <p>₹${Number(p.price).toFixed(2)}</p>
          </div>
          <div class="card-actions">
            <button class="btn-add-cart">Add to Cart</button>
            <button class="btn-remove">Remove</button>
          </div>
        `;
        card.querySelector('.btn-add-cart').addEventListener('click', ()=> addToCartObj(p,1));
        card.querySelector('.btn-remove').addEventListener('click', ()=>{
          const upd = read(WISH_KEY).filter(i=>i.id !== p.id);
          write(WISH_KEY, upd);
          renderWishlistPage();
          toast('Removed from wishlist 💔');
        });
        el2.appendChild(card);
      });
      return;
    }

    // default list layout for #wishlist-items
    list.forEach(p => {
      const row = document.createElement('div');
      row.className = 'wishlist-item';
      row.innerHTML = `
        <div class="d-flex align-items-center" style="gap:20px;">
          <img src="${p.img}" alt="${p.name}">
          <div class="wishlist-info">
            <h5>${p.name}</h5>
            <p>₹${Number(p.price).toFixed(2)}</p>
          </div>
        </div>
        <div class="wishlist-actions">
          <button class="add-cart btn btn-sm btn-warning">Add to Cart</button>
          <button class="remove btn btn-sm btn-danger">Remove</button>
        </div>
      `;
      row.querySelector('.add-cart').addEventListener('click', ()=> addToCartObj(p,1));
      row.querySelector('.remove').addEventListener('click', ()=> {
        const upd = read(WISH_KEY).filter(i=>i.id !== p.id);
        write(WISH_KEY, upd);
        renderWishlistPage();
        toast('Removed from wishlist 💔');
      });
      el1.appendChild(row);
    });
  }

  /* ----------- Cart page rendering ------------- */
  function renderCartPage(){
    const box = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total') || document.getElementById('cart-totals') || null;
    if(!box) return; // not on cart page

    const cart = read(CART_KEY);
    box.innerHTML = '';
    if(cart.length === 0){
      box.innerHTML = '<p class="empty-cart">Your cart is empty 😢</p>';
      if(totalEl) totalEl.textContent = '₹0.00';
      renderCartCount();
      return;
    }

    let subtotal = 0;
    cart.forEach(item => {
      subtotal += item.price * item.qty;
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="d-flex align-items-center" style="gap:15px;">
          <img src="${item.img}" alt="${item.name}">
          <div>
            <h5>${item.name}</h5>
            <p class="text-warning">₹${Number(item.price).toFixed(2)}</p>
          </div>
        </div>
        <div class="cart-controls">
          <button class="btn-minus">−</button>
          <span class="qty">${item.qty}</span>
          <button class="btn-plus">+</button>
          <button class="btn-remove">Remove</button>
        </div>
      `;
      row.querySelector('.btn-plus').addEventListener('click', ()=>{
        item.qty++; write(CART_KEY, cart); renderCartPage(); renderCartCount();
      });
      row.querySelector('.btn-minus').addEventListener('click', ()=>{
        if(item.qty > 1){ item.qty--; write(CART_KEY, cart); renderCartPage(); renderCartCount(); }
        else { const updated = read(CART_KEY).filter(p=>p.id !== item.id); write(CART_KEY, updated); renderCartPage(); renderCartCount(); }
      });
      row.querySelector('.btn-remove').addEventListener('click', ()=>{
        const updated = read(CART_KEY).filter(p=>p.id !== item.id); write(CART_KEY, updated); renderCartPage(); renderCartCount(); toast('Removed from cart 🗑️');
      });
      box.appendChild(row);
    });

    if(totalEl) totalEl.textContent = `₹${subtotal.toFixed(2)}`;
    renderCartCount();
  }

  // helper to set `.cart-count` elements (used by some parts)
  function renderCartCount(){
    const cart = read(CART_KEY);
    const count = cart.reduce((s,p)=> s + Number(p.qty||1), 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
  }

  // ensure hearts reflect wishlist on load (visual)
  function syncHearts(){
    const wish = read(WISH_KEY);
    document.querySelectorAll('.product-item').forEach(pi=>{
      const prod = productFromEl(pi);
      const heart = pi.querySelector('.icon_heart_alt, .icon_heart, .fa-heart');
      if(!heart) return;
      if(wish.find(p=>p.id === prod.id)){
        heart.classList.add('active');
        heart.style.color = 'red';
        // if template uses icon_heart_alt/icon_heart swap to filled
        heart.classList.remove('icon_heart_alt');
        heart.classList.add('icon_heart');
      } else {
        heart.classList.remove('active');
        heart.style.color = '';
        heart.classList.remove('icon_heart');
        heart.classList.add('icon_heart_alt');
      }
    });
  }

  // init
  document.addEventListener('DOMContentLoaded', function(){
    // Bind buttons on product lists
    bindProductButtons();

    // render header counts and pages
    renderCartCount();
    renderWishlistPage();
    renderCartPage();
    syncHearts();

    // Expose API (optional)
    window.TK = {
      addToCartObj, toggleWishlistObj, read, write
    };
  });

})();

// shop page

 document.addEventListener('DOMContentLoaded', function() {
            // --- 1. Image Gallery Functionality ---
            const mainImage = document.getElementById('main-image');
            const thumbnails = document.querySelectorAll('.image-thumbnail');

            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    // Update main image source
                    mainImage.src = this.getAttribute('data-image');
                    
                    // Update active class
                    thumbnails.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // --- 2. Color Swatches Functionality ---
            const colorSwatches = document.querySelectorAll('.color-swatch');
            const selectedColorName = document.getElementById('selected-color-name');

            colorSwatches.forEach(swatch => {
                swatch.addEventListener('click', function() {
                    // Update active class
                    colorSwatches.forEach(s => s.classList.remove('active'));
                    this.classList.add('active');

                    // Update displayed color name
                    const colorName = this.getAttribute('data-color');
                    selectedColorName.textContent = colorName;

                    // *A real site would update the product image here based on the color.*
                });
            });

            // --- 3. Quantity Selector Functionality ---
            const qtyInput = document.getElementById('quantity-input');
            const qtyPlus = document.getElementById('qty-plus');
            const qtyMinus = document.getElementById('qty-minus');

            qtyPlus.addEventListener('click', function() {
                let currentVal = parseInt(qtyInput.value);
                if (!isNaN(currentVal) && currentVal < 10) { // Max 10 limit
                    qtyInput.value = currentVal + 1;
                }
            });

            qtyMinus.addEventListener('click', function() {
                let currentVal = parseInt(qtyInput.value);
                if (!isNaN(currentVal) && currentVal > 1) { // Min 1 limit
                    qtyInput.value = currentVal - 1;
                }
            });


            // --- 4. Tabbed Content Functionality ---
            const tabItems = document.querySelectorAll('.tab-item');
            const tabPanes = document.querySelectorAll('.tab-pane');

            tabItems.forEach(item => {
                item.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');

                    // Remove active class from all tabs and panes
                    tabItems.forEach(i => i.classList.remove('active'));
                    tabPanes.forEach(p => p.classList.remove('active'));

                    // Add active class to clicked tab and corresponding pane
                    this.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            });

            // --- 5. Add to Cart Alert (Basic Simulation) ---
            document.getElementById('add-to-cart-btn').addEventListener('click', function() {
                const qty = qtyInput.value;
                const color = selectedColorName.textContent;
                const size = document.getElementById('size-select').value;
                
                alert(`Added ${qty} x Mid-Top White Sneaker (Color: ${color}, Size: ${size} UK) to Cart!`);
            });
        });


    // Loads the related products dynamically (Quick View link included, set-bg fix retained)
    function loadRelatedProducts(relatedIds) {
        const container = document.querySelector('.related-products .container .row:nth-of-type(2)');
        if (!container) return; 
        
        container.innerHTML = ''; 

        relatedIds.slice(0, 4).forEach(productId => {
            const product = productsData[productId];

            if (product) {
                const productHtml = `
                    <div class="col-lg-3 col-sm-6">
                        <div class="product-item">
                            <div class="pi-pic set-bg" data-setbg="${product.images[0]}">
                                <div class="icon">
                                    <i class="icon_heart_alt"></i>
                                </div>
                                <ul>
                                    <li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>
                                    <li class="quick-view"><a href="shop.html?id=${productId}">+ Quick View</a></li>
                                    <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">${product.catagory || 'Product'}</div>
                                <a href="shop.html?id=${productId}">
                                    <h5>${product.name}</h5>
                                </a>
                                <div class="product-price">
                                    ${product.price}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += productHtml;
            }
        });
        
        // Re-run the background setting function after injecting new HTML
        initBackgrounds();
    }


    // --- 4. EXECUTION ---
    document.addEventListener('DOMContentLoaded', function() {
        const currentProductId = getProductIdFromUrl();
        if (currentProductId) {
            loadProductData(currentProductId);
        } else {
            loadProductData('product_1'); 
        }
        
        // Initialize Quantity Selector
        const qtyInput = document.getElementById('quantity-input');
        const selectedColorName = document.getElementById('selected-color-name'); 

        document.getElementById('qty-plus').addEventListener('click', () => {
            let currentVal = parseInt(qtyInput.value);
            if (!isNaN(currentVal) && currentVal < 10) qtyInput.value = currentVal + 1;
        });
        document.getElementById('qty-minus').addEventListener('click', () => {
            let currentVal = parseInt(qtyInput.value);
            if (!isNaN(currentVal) && currentVal > 1) qtyInput.value = currentVal - 1;
        });

        // Initialize Add to Cart Alert
        document.getElementById('add-to-cart-btn').addEventListener('click', function() {
            if (!currentProductData) return alert('Error: Product data not loaded.');
            
            const qty = qtyInput.value;
            const color = selectedColorName.textContent;
            const size = document.getElementById('size-select').value;
            
            alert(`Added ${qty} x ${currentProductData.name} (Color: ${color}, Size: ${size} UK) to Cart!`);
        });

        // Initialize Tabs
        const tabItems = document.querySelectorAll('.tab-item');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabItems.forEach(item => {
            item.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');

                tabItems.forEach(i => i.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    });


    //-----------------------------------
// WISHLIST LOCALSTORAGE
//-----------------------------------

function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(list) {
    localStorage.setItem("wishlist", JSON.stringify(list));
}

//-----------------------------------
// ADD / REMOVE FROM WISHLIST
//-----------------------------------

function toggleWishlist(product) {
    let list = getWishlist();
    let exists = list.find(item => item.id === product.id);

    if (exists) {
        // remove
        list = list.filter(item => item.id !== product.id);
    } else {
        // add
        list.push(product);
    }

    saveWishlist(list);
    updateWishlistIcons();
}

//-----------------------------------
// UPDATE HEART ICONS ON ALL PAGES
//-----------------------------------

function updateWishlistIcons() {
    let wishlist = getWishlist();

    document.querySelectorAll(".product-item").forEach(item => {
        let id = item.dataset.id;
        let heart = item.querySelector(".wishlist-btn");

        if (!heart) return;

        if (wishlist.some(p => p.id === id)) {
            heart.classList.add("active");
        } else {
            heart.classList.remove("active");
        }
    });
}

//-----------------------------------
// HANDLE HEART CLICK EVENT
//-----------------------------------

document.addEventListener("click", function(e) {
    if (e.target.closest(".wishlist-btn")) {
        const card = e.target.closest(".product-item");

        const product = {
            id: card.dataset.id,
            name: card.dataset.name,
            price: card.dataset.price,
            img: card.dataset.img
        };

        toggleWishlist(product);
    }
});

//-----------------------------------
// RENDER WISHLIST PAGE
//-----------------------------------

function renderWishlistPage() {
    let grid = document.getElementById("wishlist-grid");
    if (!grid) return;

    let wishlist = getWishlist();

    grid.innerHTML = "";

    if (wishlist.length === 0) {
        grid.innerHTML = `<div class="empty-wishlist">Your Wishlist is Empty</div>`;
        return;
    }

    wishlist.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("wish-card");

        card.innerHTML = `
            <img src="${item.img}">
            <div class="wish-title">${item.name}</div>

            <div class="price">₹${item.price}</div>

            <button class="wish-btn add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
            <button class="wish-btn remove-btn" data-remove="${item.id}">Remove</button>
        `;

        grid.appendChild(card);
    });
}

//-----------------------------------
// REMOVE FROM WISHLIST PAGE
//-----------------------------------

document.addEventListener("click", function(e) {
    if (e.target.dataset.remove) {
        let id = e.target.dataset.remove;
        let wishlist = getWishlist();

        wishlist = wishlist.filter(item => item.id !== id);
        saveWishlist(wishlist);

        renderWishlistPage();
        updateWishlistIcons();
    }
});

//-----------------------------------
// PAGE INITIALIZATION
//-----------------------------------

document.addEventListener("DOMContentLoaded", function() {
    updateWishlistIcons();

    if (document.getElementById("wishlist-grid")) {
        renderWishlistPage();
    }
});
