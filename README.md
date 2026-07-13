# 🏋️‍♂️ Gym24 Landing Page

Landing page untuk **Gym24**, pusat kebugaran premium yang menawarkan fasilitas modern, pelatih profesional, dan berbagai pilihan membership. Website ini didesain ulang menggunakan **Tailwind CSS** dengan tampilan _dark mode_ yang modern, responsif, dinamis, dan interaktif.

## ✨ Fitur

- **Desain Modern & Premium** – Menggunakan tema _dark mode_ dengan aksen warna neon yang sporty dan futuristik.
- **Responsif Kompatibel** – Tampilan adaptif dan nyaman diakses di desktop, tablet, maupun perangkat mobile (termasuk _hamburger menu_ interaktif).
- **Informasi Membership & Layanan** – Struktur harga dan fitur paket gym yang jelas dengan penekanan pada paket populer.
- **Profil Pelatih (_Trainers Staff_)** – Menampilkan tim pelatih profesional lengkap dengan efek _grayscale to color_ dan tautan media sosial.
- **Animasi Fade-In & Scroll Halus** – Transisi transparan (_fade-in scroll_) menggunakan `IntersectionObserver` dan _smooth scrolling_ bawaan Tailwind.
- **Integrasi Kontak langsung** – Tautan langsung ke WhatsApp untuk mempermudah pendaftaran sesi uji coba gratis (_free trial_).

## 🛠️ Teknologi yang Digunakan

- **HTML5** – Struktur semantik halaman.
- **Tailwind CSS (via Play CDN)** – Untuk _styling_ utilitas, tata letak modern (_Grid/Flexbox_), dan efek transisi tanpa file CSS eksternal yang besar.
- **JavaScript (Vanilla JS)** – Untuk logika _hamburger menu_, _auto-slider_ galeri foto, dan deteksi animasi _scroll track_ (`IntersectionObserver`).

## 📂 Struktur Proyek

```text
gym24-landing-page/
│── index.html    # Halaman utama dengan integrasi Tailwind CSS
│── style.css     # Menyimpan utilitas animasi custom (Fade-In)
│── script.js      # Logika interaktif (Hamburger, Slider, IntersectionObserver)
└── img/          # Aset gambar, ikon, dan logo pendukung
```

## 🚀 Cara Menjalankan Proyek

1. Clone atau unduh repositori ini ke komputer Anda.
2. Pastikan struktur folder teratur sesuai dengan skema di atas (terutama folder `img/` yang berisi aset ikon).
3. Buka file `index.html` langsung melalui peramban web (_browser_) kesayangan Anda, atau gunakan ekstensi seperti **Live Server** di VS Code untuk pengalaman pengembangan yang lebih lancar.
