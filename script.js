/* ==================================================
   1. قاعدة البيانات (Menu Items Database)
   ================================================== */


// بيانات افتراضية احتياطية في حال عدم وجود بيانات في LocalStorage أو Firebase
const defaultItems = [
  // --- قسم الأطعمة (Food) ---
  { id: 1, name: 'برجر كنج كلاسيك', price: 120, cat: 'food', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
  { id: 2, name: 'بيتزا مارغريتا', price: 150, cat: 'food', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500' },
  { id: 3, name: 'سباجيتي بولونيز', price: 110, cat: 'food', img: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=500' },
  { id: 6, name: 'برجر دبل تشيز', price: 160, cat: 'food', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500' },
  { id: 7, name: 'فاهيتا دجاج', price: 130, cat: 'food', img: 'https://i.ytimg.com/vi/9rQ9sCsuhRE/maxresdefault.jpg' },
  { id: 8, name: 'تشيكن سلايدر', price: 95, cat: 'food', img: 'https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638785302646390343' },
  { id: 9, name: 'سلطة خضراء', price: 80, cat: 'food', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500' },
  { id: 10, name: 'سوشي سيت', price: 220, cat: 'food', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500' },
  { id: 16, name: 'شاورما دجاج', price: 90, cat: 'food', img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500' },
  { id: 17, name: 'بطاطس مقلية', price: 50, cat: 'food', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDvjHKJr-qPCjvGXYHS58a5JQeOo1nDTHtg&s' },

  // --- قسم المشروبات (Drinks) ---
  { id: 4, name: 'عصير برتقال طبيعي', price: 30, cat: 'drinks', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500' },
  { id: 11, name: 'عصير مانجو طازج', price: 35, cat: 'drinks', img: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500' },
  { id: 12, name: 'لاتيه بارد', price: 40, cat: 'drinks', img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500' },
  { id: 13, name: 'كابتشينو', price: 38, cat: 'drinks', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500' },
  { id: 19, name: 'عصير تفاح فريش', price: 33, cat: 'drinks', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgod5ahYgnGxjCQkZvC4NGvlJuZL97HaSYOA&s' },
  { id: 20, name: 'سموذي التوت', price: 48, cat: 'drinks', img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500' },

  // --- قسم الحلويات (Sweets) ---
  { id: 5, name: 'كعكة الشوكولاتة', price: 70, cat: 'sweets', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
  { id: 14, name: 'تشيز كيك فراولة', price: 85, cat: 'sweets', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500' },
  { id: 15, name: 'بسبوسة بالمكسرات', price: 45, cat: 'sweets', img: 'https://www.exception-group.com/wp-content/uploads/2024/08/1.webp' },
  { id: 18, name: 'كريب نوتيلا', price: 60, cat: 'sweets', img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500' },
  // --- أصناف إضافية (New Items) ---
    
  { id: 21, name: 'مشويات مشكلة (كباب وكفتة)', price: 280, cat: 'food', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500' },
  { id: 22, name: 'دجاج مقلي (بروستد)', price: 140, cat: 'food', img: 'https://cdn.arabsstock.com/uploads/images/180294/a-collection-of-crispy-fried-thumbnail-180294.webp' },
  { id: 23, name: 'ستيك لحم ريب آي', price: 350, cat: 'food', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500' },
  { id: 24, name: 'كلوب ساندوتش', price: 95, cat: 'food', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },
  { id: 25, name: 'تاكو مكسيكي', price: 110, cat: 'food', img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500' },
  { id: 26, name: 'سلطة سيزر دجاج', price: 85, cat: 'food', img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500' },
  { id: 27, name: 'هوت دوج سبيشال', price: 65, cat: 'food', img: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=500' },
  { id: 28, name: 'جمبري مشوي', price: 220, cat: 'food', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500' },
  { id: 29, name: 'لازانيا باللحم', price: 130, cat: 'food', img: 'https://images.arla.com/recordid/400FD751-4B22-4CC2-BE79C5E5B417A2F5/easy-beef-lasagna-with-bechamel-sauce.jpg' },
  { id: 30, name: 'أجنحة دجاج حارة', price: 90, cat: 'food', img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500' }
];

// تحميل البيانات واستخدام الذاكرة المحلية LocalStorage
let menuItems = JSON.parse(localStorage.getItem('myMenuData')) || defaultItems;
let cart = [];
let reviews = JSON.parse(localStorage.getItem('myReviews')) || [];
const SHIPPING_FEE = 20; // قيمة التوصيل ثابتة
let RESTAURANT_PHONE = localStorage.getItem('restaurantPhone') || '201021279663'; // رقم المطعم

/* ==================================================
   2. نظام التنقل والتحكم في الصفحات
   ================================================== */
function showPage(pageId) {
    // حماية لوحة الإدارة - التحقق من تسجيل الدخول
    if (pageId === 'admin' || pageId === 'admin-page') {
        if (sessionStorage.getItem('isAdmin') !== 'true') {
            alert('⛔ يجب تسجيل الدخول أولاً للوصول إلى لوحة الإدارة');
            showPage('login-page'); // إعادة توجيه إلى صفحة تسجيل الدخول
            return;
        }
    }
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });
    
    // التعامل مع الأسماء بدون '-page'
    let targetId = pageId;
    if (!pageId.endsWith('-page')) {
        targetId = pageId + '-page';
    }
    
    const activePage = document.getElementById(targetId);
    if (activePage) {
        activePage.classList.add('active');
        activePage.style.display = 'block';
    }
    
    // تحديث البيانات بناءً على الصفحة المفتوحة
    if (pageId === 'menu' || pageId === 'menu-page') renderMenu(menuItems);
    if (pageId === 'home' || pageId === 'home-page') {
        initializeHomeMenu();
    }
    if (pageId === 'admin' || pageId === 'admin-page') {
        renderAdminList();
        initializeAdminPanel();
    }
    if (pageId === 'contact' || pageId === 'contact-page') renderReviews();
    
    // العودة لأعلى الصفحة عند الانتقال
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==================================================
   3. إدارة المنيو (العرض، البحث، الفلترة)
   ================================================== */
function renderMenu(data) {
    const grid = document.getElementById('itemsGrid');
    if (!grid) return;
    
    grid.innerHTML = data.map(item => `
        <div class="res-card">
            <div class="card-img-container">
                <img class="interactive-img" src="${item.img}" alt="${item.name}" onclick="openImageModal('${item.img}', '${item.name.replace(/'/g, "\\'")}')" onerror="this.onerror=null; this.src='https://via.placeholder.com/280x200?text=No+Image'; this.style.height='140px'; this.style.objectFit='cover';">
            </div>
            <div class="res-info" style="padding:15px; text-align:center;">
                <h4 style="font-size:18px; margin-bottom:8px;">${item.name}</h4>
                <p style="color:var(--primary); font-weight:bold; font-size:17px; margin-bottom:12px;">${item.price} ج.م</p>
                <button class="add-btn-card" onclick="addToCart(${item.id})"
                         style="width:100%; padding:12px; font-size:16px; background:var(--primary); color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer; transition: 0.3s;">
                    أضف للسلة <i class="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function searchFunction() {
    const term = document.getElementById('mainSearch').value.toLowerCase();
    const filtered = menuItems.filter(item => item.name.toLowerCase().includes(term));
    renderMenu(filtered);
}

function filterItems(category) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    if (category === 'all') {
        renderMenu(menuItems);
    } else {
        renderMenu(menuItems.filter(i => i.cat === category));
    }
}

// دوال قائمة المنزل
function renderHomeMenu(data) {
    const grid = document.getElementById('homeMenuGrid');
    if (!grid) return;
    
    // عرض أول 8 منتجات فقط
    const limitedData = data.slice(0, 8);
    
    grid.innerHTML = limitedData.map(item => `
        <div class="res-card">
            <div class="card-img-container">
                <img class="interactive-img" src="${item.img}" alt="${item.name}" onclick="openImageModal('${item.img}', '${item.name.replace(/'/g, "\\'")}')" onerror="this.onerror=null; this.src='https://via.placeholder.com/280x200?text=No+Image'; this.style.height='140px'; this.style.objectFit='cover';">
            </div>
            <div class="res-info" style="padding:15px; text-align:center;">
                <h4 style="font-size:18px; margin-bottom:8px;">${item.name}</h4>
                <p style="color:var(--primary); font-weight:bold; font-size:17px; margin-bottom:12px;">${item.price} ج.م</p>
                <button class="add-btn-card" onclick="addToCart(${item.id})"
                         style="width:100%; padding:12px; font-size:16px; background:var(--primary); color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer; transition: 0.3s;">
                    أضف للسلة <i class="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function searchHomeMenu() {
    const term = document.getElementById('homeSearch').value.toLowerCase();
    const filtered = menuItems.filter(item => item.name.toLowerCase().includes(term));
    renderHomeMenu(filtered);
}

function filterHomeMenu(category) {
    const tabs = document.querySelectorAll('.filter-tabs .tab-btn');
    tabs.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    if (category === 'all') {
        renderHomeMenu(menuItems);
    } else {
        renderHomeMenu(menuItems.filter(i => i.cat === category));
    }
}

// تحميل المنيو في الصفحة الرئيسية عند البدء
function initializeHomeMenu() {
    renderHomeMenu(menuItems);
}

/* ==================================================
   4. نظام السلة المطور (إضافة، حذف، حساب إجمالي)
   ================================================== */
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (item) {
        const existingItem = cart.find(i => i.id === id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cart.push({...item, quantity: 1, cartId: Date.now()});
        }
        updateCartCount();
        renderCartItems();
        showPage('cart-page');
        showNotification(`✅ تمت إضافة ${item.name} للسلة`, 'success');
    }
}

function renderCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    const orderSummary = document.getElementById('orderSummary');
    const totalPrice = document.getElementById('totalPrice');
    const subtotalPrice = document.getElementById('subtotalPrice');

    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <i class="fa fa-shopping-cart" style="font-size:64px; color:#BDC3C7; margin-bottom:20px;"></i>
                <h3 style="color:#7F8C8D; margin-bottom:10px;">السلة فارغة</h3>
                <p style="color:#BDC3C7; margin-bottom:30px;">لم تضف أي منتجات بعد</p>
                <button onclick="showPage('menu-page')" style="background:linear-gradient(135deg, #FF6B35, #FF8E5F); color:white; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-weight:600;">
                    <i class="fa fa-arrow-right"></i> اذهب للقائمة
                </button>
            </div>
        `;
        if(orderSummary) orderSummary.innerHTML = '<p style="color:rgba(255,255,255,0.8); text-align:center;">لا توجد عناصر</p>';
        if(totalPrice) totalPrice.textContent = '0';
        return;
    }

    let total = 0;
    let html = '';
    let summaryHtml = '';

    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        total += itemTotal;
        
        html += `
            <div class="cart-item" style="background:white; border:1px solid #E8EAED; border-radius:12px; padding:20px; margin-bottom:15px; display:flex; gap:15px; align-items:center; transition:all 0.3s;">
                <div style="flex-shrink:0;">
                    <img src="${item.image || item.img}" alt="${item.name}" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
                </div>
                <div style="flex-grow:1;">
                    <h4 style="margin:0 0 8px 0; color:#2C3E50; font-size:16px; font-weight:700;">${item.name}</h4>
                    <p style="margin:0; color:#7F8C8D; font-size:14px;">${item.cat || item.category}</p>
                    <div style="display:flex; align-items:center; gap:8px; margin-top:10px;">
                        <button onclick="decreaseQuantity(${index})" style="width:32px; height:32px; background:#F0F0F0; border:1px solid #DDD; border-radius:6px; cursor:pointer; font-weight:600; transition:0.2s;">−</button>
                        <span style="width:40px; text-align:center; font-weight:700; color:#FF6B35;">${quantity}</span>
                        <button onclick="increaseQuantity(${index})" style="width:32px; height:32px; background:#F0F0F0; border:1px solid #DDD; border-radius:6px; cursor:pointer; font-weight:600; transition:0.2s;">+</button>
                    </div>
                </div>
                <div style="text-align:right; flex-shrink:0;">
                    <p style="margin:0 0 8px 0; color:#FF6B35; font-size:16px; font-weight:700;">${itemTotal} ج.م</p>
                    <p style="margin:0; color:#7F8C8D; font-size:12px;">${item.price} ج.م × ${quantity}</p>
                    <button onclick="removeFromCart(${index})" style="margin-top:10px; background:#FFE5DC; color:#FF6B35; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; transition:all 0.3s;">
                        <i class="fa fa-trash"></i> حذف
                    </button>
                </div>
            </div>
        `;

        summaryHtml += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.2); font-size:14px;">
                <span>${item.name} × ${quantity}</span>
                <strong>${itemTotal} ج.م</strong>
            </div>
        `;
    });

    cartItemsList.innerHTML = html;
    if(orderSummary) orderSummary.innerHTML = summaryHtml;

    const shipping = 20;
    const finalTotal = total + shipping;
    if(subtotalPrice) subtotalPrice.textContent = total;
    if(totalPrice) totalPrice.textContent = finalTotal;
}

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = cart.length;
}

function updateCartUI() {
    const list = document.getElementById('cartItemsList');
    if (!list) return;
    
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const shipping = subtotal > 0 ? SHIPPING_FEE : 0;
    const total = subtotal + shipping;
    
    if(document.getElementById('totalPrice')) {
        document.getElementById('totalPrice').innerText = total;
    }
    
    // عرض عناصر السلة بتنسيق احترافي
    list.innerHTML = cart.map((item, index) => `
        <div class="cart-item-row" style="display:flex; justify-content:space-between; align-items:center; background:white; padding:15px; margin-bottom:10px; border-radius:12px; box-shadow:var(--shadow); border-right:4px solid var(--primary);">
            <div>
                <span style="font-size:16px; font-weight:bold; display:block;">${item.name}</span>
                <span style="font-size:14px; color:var(--primary); font-weight:bold;">${item.price} ج.م</span>
            </div>
            <i class="fa-solid fa-trash-can" onclick="removeFromCart(${index})" style="color:#ff4d4d; font-size:20px; cursor:pointer; padding:10px;"></i>
        </div>
    `).join('');
    
    // إضافة سطر التوصيل بشكل منفصل للوضوح
    if (subtotal > 0) {
        list.innerHTML += `
            <div class="delivery-row" style="display:flex; justify-content:space-between; padding:12px; background:#fff5f0; border-radius:10px; margin-top:10px; border:1px dashed #f55905;">
                <span style="font-weight:600;">تكلفة التوصيل:</span>
                <span style="font-weight:bold;">${shipping} ج.م</span>
            </div>
        `;
    } else {
        list.innerHTML = `<p style="text-align:center; padding:20px; color:#888;">السلة فارغة، ابدأ بإضافة وجباتك المفضلة!</p>`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartUI();
}

function increaseQuantity(index) {
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + 1;
        renderCartItems();
    }
}

function decreaseQuantity(index) {
    if (cart[index]) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            removeFromCart(index);
            return;
        }
        renderCartItems();
    }
}

/* ==================================================
   5. إتمام الطلب وإرسال البيانات للعميل والمطعم
   ================================================== */
function finishOrder() {
    const name = document.getElementById('userName').value.trim();
    const address = document.getElementById('userAddress').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const totalPrice = document.getElementById('totalPrice').innerText;
    
    // التحقق من البيانات
    if (!name || !address || !phone) {
        showNotification('⚠️ الرجاء ملء جميع البيانات المطلوبة', 'warning');
        return;
    }
    
    // تنسيق رقم الهاتف
    let formattedPhone = phone.replace(/^0/, '20');
    if (!formattedPhone.startsWith('20')) {
        formattedPhone = '20' + phone;
    }
    formattedPhone = formattedPhone.replace(/\D/g, '');
    
    if (!/^201[0-9]{9}$/.test(formattedPhone)) {
        showNotification('❌ رقم الهاتف غير صحيح. استخدم صيغة مصرية صحيحة', 'error');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('❌ السلة فارغة! أضف بعض المنتجات أولاً', 'error');
        return;
    }
    
    // بناء نص الرسالة احترافي
    let itemsSummary = '';
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        subtotal += itemTotal;
        itemsSummary += `\n${index + 1}️⃣ ${item.name} × ${quantity} = *${itemTotal} ج.م*`;
    });
    
    const shipping = SHIPPING_FEE;
    const finalTotal = subtotal + shipping;
    const timestamp = new Date().toLocaleString('ar-EG');
    
    // رسالة للعميل
    let customerMessage = `*✅ تأكيد طلبك من My Order*\n\n`;
    customerMessage += `مرحباً ${name} 👋\n\n`;
    customerMessage += `تم استقبال طلبك برقم: *#${Math.random().toString(36).substr(2, 9).toUpperCase()}*\n\n`;
    customerMessage += `${'═'.repeat(40)}\n`;
    customerMessage += `*📅 التاريخ والوقت:* ${timestamp}\n`;
    customerMessage += `*📍 عنوان التوصيل:* ${address}\n`;
    customerMessage += `${'═'.repeat(40)}\n`;
    customerMessage += `*🍽️ تفاصيل طلبك:*${itemsSummary}\n`;
    customerMessage += `${'═'.repeat(40)}\n`;
    customerMessage += `*💵 ملخص الفاتورة:*\n`;
    customerMessage += `المجموع الجزئي: ${subtotal} ج.م\n`;
    customerMessage += `🚚 رسوم التوصيل: ${shipping} ج.م\n`;
    customerMessage += `${'═'.repeat(40)}\n`;
    customerMessage += `*💰 الإجمالي النهائي: ${finalTotal} ج.م* ✅\n\n`;
    customerMessage += `⏱️ وقت التوصيل المتوقع: 30-45 دقيقة\n\n`;
    customerMessage += `شكراً لطلبك من My Order 🙏❤️\n`;
    customerMessage += `للتواصل بخدمة العملاء: 201021279663`;
    
    // رسالة للمطعم
    let restaurantMessage = `*🛍️ 📝 طلب جديد من My Order*\n`;
    restaurantMessage += `${'═'.repeat(40)}\n`;
    restaurantMessage += `*👤 اسم العميل:* ${name}\n`;
    restaurantMessage += `*📱 رقم العميل:* ${phone}\n`;
    restaurantMessage += `*📍 عنوان التوصيل:* ${address}\n`;
    restaurantMessage += `*📅 الوقت:* ${timestamp}\n`;
    restaurantMessage += `${'═'.repeat(40)}\n`;
    restaurantMessage += `*🍽️ تفاصيل الطلب:*${itemsSummary}\n`;
    restaurantMessage += `${'═'.repeat(40)}\n`;
    restaurantMessage += `*💰 الإجمالي:* *${finalTotal} ج.م*\n\n`;
    restaurantMessage += `⚠️ برجاء تحضير الطلب بسرعة`;
    
    // عرض رسالة التحميل
    showNotification('⏳ جاري إرسال الرسالة...', 'info');
    
    // حفظ الطلب في Firebase
    const orderData = {
        customerName: name,
        customerPhone: formattedPhone,
        customerAddress: address,
        items: cart,
        subtotal: subtotal,
        shipping: shipping,
        total: finalTotal,
        timestamp: new Date().toISOString()
    };
    
    // محاولة حفظ في Firebase إذا كان متاحاً
    if (typeof firebaseDB !== 'undefined' && firebaseDB.saveOrderToFirebase) {
        firebaseDB.saveOrderToFirebase(orderData);
    }
    
    setTimeout(() => {
        // إرسال رسالة للعميل
        const customerPhone = formattedPhone;
        const customerEncoded = encodeURIComponent(customerMessage);
        window.open(`https://wa.me/${customerPhone}?text=${customerEncoded}`, '_blank');
        
        // إرسال رسالة للمطعم بعد تأخير بسيط
        setTimeout(() => {
            const restaurantEncoded = encodeURIComponent(restaurantMessage);
            window.open(`https://wa.me/${RESTAURANT_PHONE}?text=${restaurantEncoded}`, '_blank');
        }, 500);
        
        // بعد إرسال الطلب
        setTimeout(() => {
            cart = [];
            updateCartCount();
            updateCartUI();
            
            // مسح حقول الإدخال
            document.getElementById('userName').value = '';
            document.getElementById('userAddress').value = '';
            document.getElementById('userPhone').value = '';
            
            showNotification('✨ تم إرسال الطلب بنجاح! شكراً لك 🙏', 'success');
            
            // العودة للصفحة الرئيسية بعد 2 ثانية
            setTimeout(() => showPage('home-page'), 2000);
        }, 1000);
    }, 500);
}

// دالة عرض إشعارات احترافية
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
            type === 'success' ? 'linear-gradient(135deg, #4CAF50, #66BB6A)' :
            type === 'error' ? 'linear-gradient(135deg, #FF5252, #FF6E40)' :
            type === 'warning' ? 'linear-gradient(135deg, #FFC107, #FFD54F)' :
            'linear-gradient(135deg, #2196F3, #42A5F5)'
        };
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
        font-size: 14px;
        max-width: 350px;
        word-wrap: break-word;
    `;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    // إزالة الإشعار بعد 4 ثوان
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/* ==================================================
   6. لوحة التحكم (Admin Panel) والتقييمات
   ================================================== */
async function addNewItemFromAdmin() {
    const name = document.getElementById('newItemName').value.trim();
    const price = document.getElementById('newItemPrice').value.trim();
    const cat = document.getElementById('newItemCat').value || 'food';
    let img = document.getElementById('newItemImg').value.trim() || '';
    const fileInput = document.getElementById('newItemFile');

    // Helper to read File -> dataURL
    function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsDataURL(file);
        });
    }

    // If a local file was selected, prefer it and convert to data URL (works without server)
    if (fileInput && fileInput.files && fileInput.files[0]) {
        try {
            img = await readFileAsDataURL(fileInput.files[0]);
        } catch (e) {
            console.warn('Failed to read selected image file:', e);
            showNotification('❌ لم نتمكن من قراءة ملف الصورة المختار. حاول مجدداً أو استخدم رابطاً.', 'error');
        }
    }

    if (!name || !price) {
        showNotification('⚠️ الرجاء إدخال اسم الوجبة والسعر على الأقل', 'warning');
        return;
    }

    const numPrice = parseFloat(price);
    if (isNaN(numPrice) || numPrice <= 0) {
        showNotification('⚠️ السعر يجب أن يكون رقماً موجباً', 'warning');
        return;
    }

    const newItem = { id: Date.now(), name, price: numPrice, cat, img: '' };

    function finalizeAdd(resolvedImg) {
        newItem.img = resolvedImg || 'https://via.placeholder.com/280x200?text=صورة+الطعام';
        menuItems.push(newItem);

        try {
            localStorage.setItem('myMenuData', JSON.stringify(menuItems));
            showNotification('✨ تم إضافة الصنف بنجاح محلياً! 🎉', 'success');
        } catch(e) {
            showNotification('❌ خطأ في حفظ البيانات محلياً', 'error');
            return;
        }

        if (typeof window.firebaseDB !== 'undefined' && window.firebaseDB.syncMenuToFirebase) {
            try {
                window.firebaseDB.syncMenuToFirebase();
                showNotification('🔄 جاري مزامنة القائمة مع Firebase...', 'info');
            } catch (err) {
                console.warn('Firebase sync failed:', err);
            }
        }

        renderAdminList();
        renderMenu(menuItems);

        // مسح الخانات بعد الإضافة
        document.getElementById('newItemName').value = '';
        document.getElementById('newItemPrice').value = '';
        document.getElementById('newItemImg').value = '';
        if (fileInput) fileInput.value = '';
    }

    if (!img) {
        finalizeAdd('https://via.placeholder.com/280x200?text=صورة+الطعام');
        return;
    }

    // Helper: try loading a single image URL, with timeout
    function tryLoadImage(url, timeout = 5000) {
        return new Promise((resolve) => {
            const i = new Image();
            let done = false;
            const to = setTimeout(() => {
                if (done) return;
                done = true;
                i.src = '';
                resolve(false);
            }, timeout);
            i.onload = () => { if (done) return; done = true; clearTimeout(to); resolve(true); };
            i.onerror = () => { if (done) return; done = true; clearTimeout(to); resolve(false); };
            try { i.src = url; } catch (e) { clearTimeout(to); if (!done) resolve(false); }
        });
    }

    // Build candidate URLs to try: if user entered full URL use it; otherwise try as-is and with images/ prefix
    const candidates = [];
    const raw = img;
    const isRemote = /^(https?:)?\/\//i.test(raw) || raw.startsWith('data:');
    const isFileLocal = /^[a-zA-Z]:\\|^file:\/\//.test(raw) || raw.startsWith('/');

    if (isRemote) {
        candidates.push(raw);
    } else if (isFileLocal) {
        // local absolute paths cannot be fetched by browser — ignore and show placeholder
        showNotification('⚠️ يبدو أن الرابط يشير إلى مسار محلي على جهازك. ضع اسم الملف داخل مجلد images/ أو رابط كامل يبدأ بـ https://', 'warning');
    } else {
        // try the entered value, then images/ prefixed
        candidates.push(raw);
        if (!raw.startsWith('images/')) candidates.push('images/' + raw);
    }

    // Try candidates sequentially
    let found = null;
    for (const c of candidates) {
        const url = c;
        /* eslint-disable no-await-in-loop */
        const ok = await tryLoadImage(url, 4500);
        if (ok) { found = url; break; }
    }

    if (found) {
        finalizeAdd(found);
        return;
    }

    // No candidate worked — fallback to placeholder
    finalizeAdd('https://via.placeholder.com/280x200?text=صورة+الطعام');
    showNotification('❌ لم يتم العثور على الصورة المدخلة. تم استخدام صورة بديلة. تأكد من رفعها داخل مجلد images/ أو استخدم رابط كامل.', 'error');
}

function renderAdminList() {
    const list = document.getElementById('adminItemsList');
    if (!list) return;
    
    if (menuItems.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding:30px; color:#7F8C8D; font-size:15px;">📭 لا توجد أصناف حالياً</p>`;
        return;
    }
    
    list.innerHTML = menuItems.map(item => `
        <div style="background:linear-gradient(135deg, rgba(255,107,53,0.05), rgba(255,142,95,0.05)); padding:16px; margin-bottom:12px; border-radius:12px; display:flex; justify-content:space-between; align-items:center; border-left:4px solid #FF6B35; transition:0.3s; hover:box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div>
                <span style="font-weight:700; display:block; color:#2C3E50; font-size:15px;">📌 ${item.name}</span>
                <span style="font-size:13px; color:#7F8C8D; display:block; margin-top:4px;">💰 ${item.price} ج.م</span>
            </div>
            <button onclick="deleteItem(${item.id})" style="background:linear-gradient(135deg, #E74C3C, #C0392B); color:white; border:none; padding:10px 18px; border-radius:8px; cursor:pointer; font-size:13px; font-weight:600; transition:0.3s; box-shadow:0 2px 8px rgba(231,76,60,0.2);">🗑️ حذف</button>
        </div>
    `).join('');
}

function deleteItem(id) {
    if(confirm("⚠️ هل تريد فعلاً حذف هذا الصنف؟")) {
        menuItems = menuItems.filter(i => i.id !== id);
        localStorage.setItem('myMenuData', JSON.stringify(menuItems));
        renderAdminList();
        renderMenu(menuItems);
        showNotification('✓ تم حذف الصنف بنجاح', 'success');
    }
}

function updateRestaurantPhone() {
    const phoneInput = document.getElementById('restaurantPhoneInput');
    let phone = phoneInput.value.trim();
    
    if (!phone) {
        showNotification('⚠️ الرجاء إدخال رقم الهاتف', 'warning');
        return;
    }
    
    // تنسيق رقم الهاتف
    let formattedPhone = phone.replace(/^0/, '20');
    if (!formattedPhone.startsWith('20')) {
        formattedPhone = '20' + phone;
    }
    formattedPhone = formattedPhone.replace(/\D/g, '');
    
    if (!/^201[0-9]{9}$/.test(formattedPhone)) {
        showNotification('❌ رقم الهاتف غير صحيح. استخدم صيغة مصرية صحيحة', 'error');
        return;
    }
    
    // حفظ الرقم
    RESTAURANT_PHONE = formattedPhone;
    localStorage.setItem('restaurantPhone', formattedPhone);
    
    // تحديث العرض
    if (document.getElementById('currentPhoneDisplay')) {
        document.getElementById('currentPhoneDisplay').textContent = formattedPhone;
    }
    phoneInput.value = '';
    
    showNotification('✅ تم تحديث رقم المطعم بنجاح', 'success');
}

// تحديث رقم المطعم عند تحميل الصفحة
function initializeAdminPanel() {
    const phoneDisplay = document.getElementById('currentPhoneDisplay');
    if (phoneDisplay) {
        phoneDisplay.textContent = RESTAURANT_PHONE;
    }
}

// زر تهيئة من لوحة الإدارة: يهيئ Firebase إن أمكن وإلا يهيئ LocalStorage ويعيد تحميل القائمة
function seedFromAdmin() {
    // إذا كانت دوال DBSeeder متاحة وFirebase متاح
    if (typeof DBSeeder !== 'undefined' && DBSeeder.seedAll && typeof window.firebaseDB !== 'undefined') {
        showNotification('⏳ جاري تهيئة البيانات في Firebase...', 'info');
        DBSeeder.seedAll();
        // بعد التهيئة حاول مزامنة البيانات
        setTimeout(() => {
            if (window.firebaseDB && window.firebaseDB.initializeFirebaseSync) {
                window.firebaseDB.initializeFirebaseSync();
            }
            showNotification('✅ تم تهيئة البيانات. تحقق من لوحة الإدارة.', 'success');
            renderMenu(menuItems);
            renderAdminList();
        }, 1200);
        return;
    }

    // بخلاف ذلك، استبدال LocalStorage بالبيانات التجريبية إذا كانت متاحة
    if (typeof DBSeeder !== 'undefined' && DBSeeder.sampleMenu) {
        menuItems = DBSeeder.sampleMenu.slice();
        localStorage.setItem('myMenuData', JSON.stringify(menuItems));
        showNotification('✅ تم تهيئة البيانات محلياً وحفظها في LocalStorage', 'success');
        renderMenu(menuItems);
        renderAdminList();
        return;
    }

    showNotification('⚠️ لا توجد بيانات تهيئة متاحة حالياً. افتح db-seed.js', 'warning');
}

// دالة لمسح جميع الأصناف (LocalStorage وFirebase إن وُجد)
function clearAllItems() {
    if (!confirm('⚠️ هل أنت متأكد من مسح جميع الأصناف؟ هذا الإجراء لا يمكن التراجع عنه.')) return;

    // مسح القائمة محلياً
    menuItems = [];
    try {
        localStorage.setItem('myMenuData', JSON.stringify(menuItems));
    } catch (e) {
        console.warn('Failed to clear localStorage menu:', e);
    }

    // محاولة مزامنة الحذف إلى Firebase إذا كانت الدوال متاحة
    if (typeof window.firebaseDB !== 'undefined' && window.firebaseDB.syncMenuToFirebase) {
        try {
            window.firebaseDB.syncMenuToFirebase();
            showNotification('🗑️ تم مسح جميع الأصناف ومزامنة التغييرات مع Firebase', 'success');
        } catch (err) {
            console.warn('Firebase sync failed after clear:', err);
            showNotification('🗑️ تم مسح الأصناف محلياً، لكن مزامنة Firebase فشلت', 'warning');
        }
    } else {
        showNotification('🗑️ تم مسح جميع الأصناف محلياً', 'success');
    }

    renderAdminList();
    renderMenu(menuItems);
}

function sendReview() {
    const text = document.getElementById('reviewText').value.trim();
    if (!text) {
        showNotification('⚠️ الرجاء كتابة تقييمك', 'warning');
        return;
    }
    
    reviews.push({ text, date: new Date().toLocaleDateString('ar-EG') });
    try {
        localStorage.setItem('myReviews', JSON.stringify(reviews));
        document.getElementById('reviewText').value = "";
        renderReviews();
        showNotification('✅ شكراً لتقييمك! تم حفظه بنجاح', 'success');
    } catch(e) {
        showNotification('❌ خطأ في حفظ التقييم', 'error');
    }
}

function renderReviews() {
    const list = document.getElementById('reviewsList');
    if(!list) return;
    
    list.innerHTML = reviews.slice().reverse().map(r => `
        <div style="background:white; padding:15px; border-radius:12px; margin-bottom:10px; border-right:4px solid var(--primary); box-shadow:var(--shadow);">
            <p style="font-size:15px; margin-bottom:5px;">${r.text}</p>
            <small style="color:#999; font-size:12px;">نُشر في: ${r.date}</small>
        </div>
    `).join('');
}

/* ==================================================
   7. تأثيرات بصرية (تأثير الثلج) وتجهيز الموقع
   ================================================== */
function createSnow() {
    const snowCount = 20;
    for (let i = 0; i < snowCount; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.innerHTML = '❄';
        flake.style.cssText = `
            position: fixed;
            top: -20px;
            color: white;
            z-index: 9999;
            pointer-events: none;
            left: ${Math.random() * 100}vw;
            animation: fall ${Math.random() * 4 + 4}s linear infinite;
            opacity: ${Math.random()};
            font-size: ${Math.random() * 20 + 10}px;
        `;
        document.body.appendChild(flake);
    }
}

/* ==================================================
   8. نظام تسجيل دخول الإدارة
   ================================================== */
function validateAdminLogin() {
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value.trim();
    const errorDiv = document.getElementById('loginError');
    
    // التحقق من أن الحقول ليست فارغة
    if (username === '' || password === '') {
        errorDiv.textContent = '⚠️ الرجاء ملء جميع الحقول المطلوبة';
        errorDiv.style.display = 'block';
        return;
    }
    
    if (username === 'admin' && password === '12345') {
        // بيانات صحيحة
        sessionStorage.setItem('isAdmin', 'true');
        errorDiv.style.display = 'none';
        alert('✨ أهلاً وسهلاً! تم تسجيل دخولك بنجاح 🎉');
        document.getElementById('admin-username').value = '';
        document.getElementById('admin-password').value = '';
        showPage('admin-page');
    } else {
        // بيانات غير صحيحة
        errorDiv.textContent = '❌ بيانات الدخول غير صحيحة. تحقق من اسم المستخدم وكلمة المرور';
        errorDiv.style.display = 'block';
    }
}

/* ==================================================
   9. دالة تسجيل الخروج من الإدارة
   ================================================== */
function logoutAdmin() {
    sessionStorage.removeItem('isAdmin');
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
    alert('👋 شكراً لك! تم تسجيل الخروج بنجاح');
    showPage('home-page');
}

// تأثير تتبع الموس - تحريك العناصر مع حركة الموس
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.res-card, .feature-box, .branch-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 5;
        const yPercent = (y / rect.height) * 5;
        card.style.transform = `perspective(1000px) rotateX(${yPercent - 2.5}deg) rotateY(${xPercent - 2.5}deg)`;
    });
});

// إعادة تعيين التحويل عند مغادرة الكارت
// Only attach mousemove tilt effects on devices that support hover (avoid touch devices)
const supportsHover = (window.matchMedia && window.matchMedia('(hover: hover)').matches) || !('ontouchstart' in window);
if (supportsHover) {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.res-card, .feature-box, .branch-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 5;
            const yPercent = (y / rect.height) * 5;
            card.style.transform = `perspective(1000px) rotateX(${yPercent - 2.5}deg) rotateY(${xPercent - 2.5}deg)`;
        });
    });

    // Reset transform when leaving viewport
    document.addEventListener('mouseleave', () => {
        const cards = document.querySelectorAll('.res-card, .feature-box, .branch-card');
        cards.forEach(card => { card.style.transform = ''; });
    });
}

// Image modal functions (open/close) - safe guards to avoid errors
function openImageModal(src, alt) {
    try {
        const modal = document.getElementById('image-modal');
        const img = document.getElementById('image-modal-img');
        const cap = document.getElementById('image-modal-caption');
        if (!modal || !img) return;
        img.src = src || '';
        img.alt = alt || '';
        cap.textContent = alt || '';
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    } catch (e) {
        console.warn('openImageModal error', e);
    }
}

function closeImageModal() {
    try {
        const modal = document.getElementById('image-modal');
        const img = document.getElementById('image-modal-img');
        if (!modal || !img) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        img.src = '';
        document.body.style.overflow = '';
    } catch (e) {
        console.warn('closeImageModal error', e);
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') closeImageModal();
});

// تشغيل الموقع عند التحميل
window.addEventListener('load', () => {
    showPage('home-page');
    updateCartCount();
    createSnow();
    // إذا كانت دوال Firebase متاحة، شغّل المزامنة للتأكد من تحميل البيانات الحقيقية
    if (typeof window.firebaseDB !== 'undefined' && window.firebaseDB.initializeFirebaseSync) {
        try {
            window.firebaseDB.initializeFirebaseSync();
        } catch (e) {
            console.warn('Firebase sync failed or unavailable:', e);
        }
    }
    
    // إضافة ستايل الأنيميشن للثلج ديناميكياً
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall { 
            to { transform: translateY(110vh) rotate(360deg); } 
        }
        @keyframes slideIn { 
            from { transform: translateX(400px); opacity: 0; } 
            to { transform: translateX(0); opacity: 1; } 
        }
        @keyframes fadeOut { 
            to { opacity: 0; } 
        }
    `;
    document.head.appendChild(style);
});

// واجهة بسيطة لاستدعاء Google Sign-In من الواجهة العامة
function googleSignIn() {
    if (window.firebaseDB && window.firebaseDB.googleSignIn) {
        window.firebaseDB.googleSignIn();
    } else {
        showNotification('⚠️ خدمة المصادقة غير جاهزة. حاول لاحقاً.', 'warning');
    }
}

