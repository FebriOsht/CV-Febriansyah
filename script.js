// Scroll animation
const sections = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.2});
sections.forEach(sec => observer.observe(sec));

window.addEventListener('load', () => {
    document.querySelectorAll('.animate').forEach(el => el.classList.add('show'));
});

// --- Modal Pop-up (Diperbarui untuk Proyek dan Trading Call) ---

// Ambil modal utama (asumsi ini adalah modal untuk Proyek/Trading Call)
const modal = document.getElementById('project-modal'); 
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const modalImage = document.getElementById('modal-image'); // Elemen gambar baru
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', () => {
        // Ambil data umum
        const title = project.dataset.title;
        const link = project.dataset.link;
        
        // Ambil deskripsi dari template
        const template = project.querySelector('template');
        const descriptionHTML = template ? template.innerHTML : project.dataset.desc || '';

        // Ambil sumber gambar utama proyek
        const imageSrc = project.querySelector('img').src; 

        // Isi konten modal
        modalTitle.textContent = title;
        modalDesc.innerHTML = descriptionHTML;
        modalLink.href = link;
        
        // Setel sumber gambar dan tampilkan
        modalImage.src = imageSrc;
        modalImage.alt = title;
        
        // Tampilkan elemen gambar.
        modalImage.style.display = 'block';

        // Tampilkan modal
        modal.style.display = 'block';
    });
});

// Tutup modal (Menangani semua tombol .close di semua .modal)
document.querySelectorAll('.modal .close').forEach(span => {
    span.addEventListener('click', () => {
        const modalElement = span.closest('.modal');
        
        // Cek apakah modalElement ditemukan
        if (modalElement) {
            modalElement.style.display = 'none';
        } 
    });
});

// Tutup modal ketika user mengklik di luar modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    // Tambahkan logika untuk menutup modal lain (jika ada)
    const otherModal = document.getElementById('myModal');
    if (otherModal && event.target === otherModal) {
        otherModal.style.display = 'none';
    }
});


// --- Dark Mode Toggle (Diperbarui untuk mengatasi duplikasi ID) ---

// Ambil semua tombol toggle dengan ID yang sama
const toggleBtns = document.querySelectorAll('#darkModeToggle');

// Cek status dark mode dari local storage atau default ke false
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Fungsi untuk menerapkan mode gelap
function applyDarkMode(enabled) {
    document.body.classList.toggle('dark-mode', enabled);
    toggleBtns.forEach(btn => {
        btn.checked = enabled;
    });
    // Simpan status
    localStorage.setItem('darkMode', enabled);
}

// Terapkan mode gelap saat load
applyDarkMode(isDarkMode);


// Tambahkan event listener untuk semua tombol
toggleBtns.forEach(btn => {
    btn.addEventListener('change', () => {
        applyDarkMode(btn.checked);
    });
});


// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
