function showPage(page) {
    const mainContent = document.getElementById("main-content");

    if (page === "dashboard") {
        mainContent.innerHTML = `
            <h2>Dashboard</h2>
            <p>Selamat datang di Farm.O! Lihat promo terbaru dari mitra kami.</p>
            
            <div class="promo-carousel">
                <div class="promo-container">
                    <div class="promo-card">
                        <img src="asset/promo1.jpg" alt="Promo 1">
                        <h3>Diskon 20% Pupuk Organik</h3>
                        <p>Dari PT. Subur Makmur</p>
                    </div>
                    <div class="promo-card">
                        <img src="asset/promo2.jpg" alt="Promo 2">
                        <h3>Gratis Ongkir Alat Tani</h3>
                        <p>Khusus pembelian di Toko Tani Jaya</p>
                    </div>
                    <div class="promo-card">
                        <img src="asset/promo3.jpg" alt="Promo 3">
                        <h3>Cashback 10% Bibit Unggul</h3>
                        <p>Kerjasama dengan Bank Tani</p>
                    </div>
                </div>
                <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
                <button class="next" onclick="changeSlide(1)">&#10095;</button>
            </div>

            <div class="dashboard-info">
                <h3>Informasi Terkini</h3>
                <ul>
                    <li>Harga beras naik 5% bulan ini</li>
                    <li>Panen raya jagung di wilayah timur</li>
                    <li>Workshop pertanian organik minggu depan</li>
                </ul>
            </div>
        
        `;
    } else if (page === "produk") {
        mainContent.innerHTML = `
            <h2>Produk Pangan</h2>
            <div class="product-container">
                <div class="product-card">
                    <img src="asset/images.jpg" alt="Beras">
                    <h3>Beras Premium</h3>
                    <p>Beras putih berkualitas tinggi</p>
                    <p class="price">Rp 15.000/kg</p>
                    <button onclick="addToCart('Beras Premium', 15000)">Cart</button>
                    <button onclick="buyNow('Beras Premium', 15000)">buy</button>
                </div>
                <div class="product-card">
                    <img src="asset/Background1.jpg" alt="Mangga">
                    <h3>Mangga Harum Manis</h3>
                    <p>Buah segar dari petani lokal</p>
                    <p class="price">Rp 20.000/kg</p>
                    <button onclick="addToCart('Sayuran Segar', 20000)">Cart</button>
                    <button onclick="buyNow('Sayuran Segar', 20000)">Buy</button>
                </div>
                <div class="product-card">
                    <img src="asset/sayur.jpg" alt="Sayur">
                    <h3>Sayur lokal</h3>
                    <p>Sayur segar hasil petani Indonesia</p>
                    <p class="price">Rp 25.000/kg</p>
                    <button onclick="addToCart('Buah Lokal', 25000)">Cart</button>
                    <button onclick="buyNow('Buah Lokal', 25000)">Buy</button>
                </div>
            </div>
            
            
        `;
    } else if (page === "adopt") {
        mainContent.innerHTML = `
            <h2>Adopt</h2>
            <p>Lihat riwayat adopsi hewan dan tumbuhan Anda.</p>
            <div class="adopt-container">
                <div class="adopt-card">
                    <img src="asset/sapi.jpg" alt="Hewan">
                    <h3>Adopt Hewan</h3>
                    <p>Adopt a pet and give them a loving home.</p>
                    <button>Adopt Now</button>
                </div>
                <div class="adopt-card">
                    <img src="asset/bonsai" alt="Tumbuhan">
                    <h3>Adopt Tumbuhan</h3>
                    <p>Bring a plant into your home and nurture it.</p>
                    <button>Adopt Now</button>
                </div>
            </div>
        `;
    } else if (page === "cart") {
        mainContent.innerHTML = `
            <h2>Cart</h2>
            <div id="cart">
                <ul id="cart-items"></ul>
                <p>Total: <span id="cart-total">Rp 0</span></p>
                <button onclick="checkout()">Checkout</button>
            </div>
        `;
    } else if (page === "history") {
        mainContent.innerHTML = `
            <h2>History</h2>
            <p>Lihat riwayat pembelian dan aktivitas Anda.</p>
            <!-- Riwayat transaksi -->
        `;
    } else if (page === "setting") {
        mainContent.innerHTML = `
            <h2>Setting</h2>
            <p>Pengaturan profil dan preferensi Anda.</p>
            <div class="profile-settings">
                <div class="profile-picture">
                    <img id="profile-img" src="asset/foto.jpg" alt="Profile Picture" />
                    <input type="file" id="upload" accept="image/*" onchange="previewImage(event)" />
                </div>
                <div class="profile-info">
                    <p><strong>Nama:</strong> Mu'Ammar</p>
                    <p><strong>Email:</strong> amarnajib4@gmail.com</p>
                    <p><strong>Telepon:</strong> 085817729217</p>
                </div>
            </div>
        `;
    } else if (page === "logout") {
        // Clear user session data (if applicable)
        localStorage.removeItem('user'); // Adjust this based on your actual storage key
    
        // Redirect to the login page
        window.location.href = "login.html"; // Change to your actual login page URL
    }
        // Function to preview the uploaded image
        function previewImage(event) {
            const img = document.getElementById('profile-img');
            img.src = URL.createObjectURL(event.target.files[0]);
        }
    
        
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) { 
        // Redirect ke halaman dashboard
        window.location.href = "index.html"; 
    } else {
        alert("Email atau password tidak boleh kosong.");
    }
});

let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({name: productName, price: price});
    total += price;
    updateCart();
}

function buyNow(productName, price) {
    alert(`Anda akan membeli ${productName} seharga Rp ${price}. Silakan lanjutkan ke pembayaran.`);
    
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = `Rp ${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja Anda kosong.');
        return;
    }

    const checkoutForm = `
        <div class="checkout-modal">
            <h3>Form Pembayaran</h3>
            <p>Total Belanja: Rp ${total}</p>
            
            <form id="payment-form" onsubmit="processPayment(event)">
                <div class="form-group">
                    <label for="name">Nama Lengkap:</label>
                    <input type="text" id="name" required>
                </div>
                
                <div class="form-group">
                    <label for="address">Alamat Pengiriman:</label>
                    <textarea id="address" required></textarea>
                </div>
                
                <div class="form-group">
                    <label for="phone">Nomor Telepon:</label>
                    <input type="tel" id="phone" required>
                </div>
                
                <div class="form-group">
                    <label for="payment-method">Metode Pembayaran:</label>
                    <select id="payment-method" required>
                        <option value="">Pilih metode pembayaran</option>
                        <option value="transfer">Transfer Bank</option>
                        <option value="ewallet">E-Wallet</option>
                        <option value="cod">Cash on Delivery</option>
                    </select>
                </div>
                
                <div id="bank-details" style="display: none;">
                    <p>Silakan transfer ke:</p>
                    <p>Bank Central Asia (BCA)</p>
                    <p>No. Rekening: 1234567890</p>
                    <p>Atas Nama: Farm.O</p>
                </div>
                
                <button type="submit" class="checkout-button">Proses Pembayaran</button>
                <button type="button" class="cancel-button" onclick="closeCheckoutModal()">Batal</button>
            </form>
        </div>
    `;

    // Buat dan tampilkan modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = checkoutForm;
    document.body.appendChild(modalContainer);

    // Tambahkan event listener untuk metode pembayaran
    document.getElementById('payment-method').addEventListener('change', function(e) {
        const bankDetails = document.getElementById('bank-details');
        if (e.target.value === 'transfer') {
            bankDetails.style.display = 'block';
        } else {
            bankDetails.style.display = 'none';
        }
    });
}

function processPayment(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Generate nomor pesanan
    const orderNumber = 'ORD' + Date.now();

    // Simulasi proses pembayaran
    const orderDetails = {
        orderNumber: orderNumber,
        items: cart,
        total: total,
        customerName: name,
        address: address,
        phone: phone,
        paymentMethod: paymentMethod,
        orderDate: new Date().toLocaleString()
    };

    saveOrder(orderDetails);


    alert(`
        Pesanan berhasil dibuat!
        Nomor Pesanan: ${orderNumber}
        Total: Rp ${total}
        
        ${paymentMethod === 'transfer' ? 'Silakan lakukan pembayaran sesuai instruksi yang tertera.' : 
          paymentMethod === 'cod' ? 'Pesanan akan dikirim dan dibayar saat barang sampai.' :
          'Silakan selesaikan pembayaran melalui e-wallet Anda.'}
    `);

    // Bersihkan keranjang
    cart = [];
    total = 0;
    updateCart();
    closeCheckoutModal();
}

function saveOrder(orderDetails) {
    // Simpan ke localStorage
    let orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderDetails);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function closeCheckoutModal() {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.remove();
    }
}


let slideIndex = 1;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelector('.promo-container');
    if (!slides) return;

    if (n > 3) {slideIndex = 1}
    if (n < 1) {slideIndex = 3}
    
    slides.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;
}

