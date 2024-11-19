const quotes = [
    "Tetap fokus, setiap bab adalah langkah menuju sukses!",
    "Jangan lupa istirahat, tapi jangan terlalu lama!",
    "Perjalanan ini memang berat, tapi hasilnya akan setimpal.",
    "Kamu sudah sejauh ini, jangan menyerah sekarang!",
    "Percaya diri dan teruslah melangkah, kamu luar biasa!",
  ];
  
  const motivateButton = document.getElementById('motivateButton');
  const quoteElement = document.getElementById('quote');
  const loveContainer = document.getElementById('loveContainer');
  
  motivateButton.addEventListener('click', () => {
    // Pilih kutipan acak
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
    
    // Tambahkan animasi fade-in ulang
    quoteElement.classList.remove('fade-in');
    void quoteElement.offsetWidth; // Trigger reflow untuk restart animasi
    quoteElement.classList.add('fade-in');
    
    // Tambahkan love animasi
    createLove();
  });
  
  function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');
    love.textContent = '❤️';
  
    // Posisi acak
    love.style.left = Math.random() * 100 + 'vw';
    love.style.top = Math.random() * 100 + '%';
  
    loveContainer.appendChild(love);
  
    // Hapus love setelah animasi selesai
    setTimeout(() => {
      love.remove();
    }, 2000);
  }
  