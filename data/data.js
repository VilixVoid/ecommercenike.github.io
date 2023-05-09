// Membuat referensi ke elemen HTML
const paymentForm = document.querySelector('.payment');
const nameInput = paymentForm.querySelector('input:nth-of-type(1)');
const phoneInput = paymentForm.querySelector('input:nth-of-type(2)');
const addressInput = paymentForm.querySelector('input:nth-of-type(3)');
const cardNumberInput = paymentForm.querySelector('input[type="password"]');
const cardExpirationMonthInput = paymentForm.querySelector('.cardInfo input:nth-of-type(1)');
const cardExpirationYearInput = paymentForm.querySelector('.cardInfo input:nth-of-type(2)');
const cardCVVInput = paymentForm.querySelector('.cardInfo input:nth-of-type(3)');
const checkoutButton = paymentForm.querySelector('.payButton');

// Mengirim data pesanan ke server saat tombol Checkout diklik
checkoutButton.addEventListener('click', () => {
  // Membuat objek pesanan
  const order = {
    name: nameInput.value,
    phone: phoneInput.value,
    address: addressInput.value,
    cardNumber: cardNumberInput.value,
    cardExpiration: {
      month: cardExpirationMonthInput.value,
      year: cardExpirationYearInput.value
    },
    cardCVV: cardCVVInput.value
  };

  // Mengirim objek pesanan ke server dalam format JSON
  fetch('data.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Menampilkan pesan sukses ke pengguna
    alert('Pesanan Anda telah berhasil diproses!');
    // Mereset formulir checkout
    paymentForm.reset();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Menampilkan pesan error ke pengguna
    alert('Maaf, terjadi kesalahan saat memproses pesanan Anda.');
  });
});
