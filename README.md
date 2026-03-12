<div align="center">

<img src="https://img.shields.io/badge/version-2.0-7B6EF6?style=for-the-badge&labelColor=1a1530" alt="version"/>
<img src="https://img.shields.io/badge/platform-browser-3DBFA8?style=for-the-badge&labelColor=1a1530" alt="platform"/>
<img src="https://img.shields.io/badge/license-MIT-F5A623?style=for-the-badge&labelColor=1a1530" alt="license"/>
<img src="https://img.shields.io/badge/no_install_needed-✓-F0707A?style=for-the-badge&labelColor=1a1530" alt="no install"/>

<br/><br/>

```
███╗   ███╗ █████╗ ████████╗██╗  ██╗    ██████╗ ██╗   ██╗███████╗██╗  ██╗
████╗ ████║██╔══██╗╚══██╔══╝██║  ██║    ██╔══██╗██║   ██║██╔════╝██║  ██║
██╔████╔██║███████║   ██║   ███████║    ██████╔╝██║   ██║███████╗███████║
██║╚██╔╝██║██╔══██║   ██║   ██╔══██║    ██╔══██╗██║   ██║╚════██║██╔══██║
██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║    ██║  ██║╚██████╔╝███████║██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
```

### 🧠 Game kuis matematika cepat · Streak harian · Naik level

**[▶ Cara Main](#-cara-penggunaan) · [✨ Fitur](#-fitur) · [🏅 Ranking](#-sistem-ranking) · [⌨ Keyboard](#️-keyboard-shortcut) · [🛠 Teknologi](#-teknologi)**

</div>

---

<br/>

## ✨ Fitur

| | Fitur | Deskripsi |
|---|---|---|
| ➕ | **Soal Acak Dinamis** | Penjumlahan, pengurangan, perkalian dengan jawaban selalu berbeda |
| 🎯 | **3 Tingkat Kesulitan** | Mudah (1–10), Sedang (1–20), Sulit (1–50) |
| ⚔️ | **2 Mode Permainan** | Latihan santai atau Tantangan dengan 3 nyawa |
| ⏱ | **Timer Fleksibel** | 4 pilihan durasi: 5, 10, 15, atau 30 detik per soal |
| 🏅 | **Sistem Ranking** | Dari Pemula hingga Math Master berdasarkan skor |
| 💾 | **Skor Tersimpan** | High score & streak disimpan via `localStorage` |
| 🔊 | **Efek Suara** | Audio prosedural via Web Audio API, bisa dimute |
| 🌐 | **Dwibahasa** | Antarmuka penuh: 🇬🇧 English & 🇮🇩 Indonesia |
| ✨ | **Animasi Premium** | Shake/bounce, ripple effect, pop-up skor `+1`, streak burst |
| ⌨️ | **Keyboard Support** | Jawab soal tanpa menyentuh mouse |

<br/>

---

## 🚀 Cara Penggunaan

```
1  Unduh file  →  mathrush-2.html
2  Buka        →  double-click di browser (Chrome / Firefox / Edge / Safari)
3  Atur        →  pilih bahasa · kesulitan · mode · timer
4  Main!       →  klik "Mulai Belajar" dan jawab soal sebelum waktu habis
```

> 💡 **Tidak perlu internet** setelah file diunduh *(kecuali Google Fonts saat pertama kali)*

<br/>

---

## ⚙️ Konfigurasi

### Mode Permainan

| Mode | Deskripsi | Cocok untuk |
|---|---|---|
| 🧘 **Latihan** | Menjawab salah tidak mengurangi nyawa | Latihan harian, pemula |
| ⚔️ **Tantangan** | 3 nyawa ❤️ — game over jika habis | Kompetisi, mengasah tekanan |

### Durasi Timer

| Detik | Label | Cocok untuk |
|---|---|---|
| ⚡ **5s** | Cepat / Fast | Veteran, adrenalin tinggi |
| ✅ **10s** | Normal | Penggunaan umum |
| 🌿 **15s** | Lambat / Slow | Belajar dengan tenang |
| 😌 **30s** | Santai / Relax | Pemula, pemanasan |

### Tingkat Kesulitan

| Level | Angka | Operator |
|---|---|---|
| 🌱 **Mudah** | 1 – 10 | `+` `-` |
| ⚡ **Sedang** | 1 – 20 | `+` `-` `×` |
| 🔥 **Sulit** | 1 – 50 | `+` `-` `×` |

<br/>

---

## 🏅 Sistem Ranking

```
  0 – 4 pts   ›   💪  Beginner       (Pemula)
  5 – 9 pts   ›   ⚡  Fast Thinker   (Pemikir Cepat)
 10 – 19 pts  ›   🥷  Math Ninja     (Ninja Matematika)
    20+ pts   ›   🏆  Math Master    (Master Matematika)
```

<br/>

---

## ⌨️ Keyboard Shortcut

| Tombol | Aksi |
|---|---|
| `1` | Pilih jawaban pertama (kiri) |
| `2` | Pilih jawaban kedua (kanan) |
| `R` | Restart game dari awal |
| `M` | Mute / unmute efek suara |

<br/>

---

## 🛠 Teknologi

```
HTML5          ·  Struktur halaman
CSS3           ·  Desain, animasi, CSS variables
Vanilla JS     ·  Logika game (tanpa framework)
Web Audio API  ·  Efek suara prosedural
localStorage   ·  Penyimpanan skor & streak
Google Fonts   ·  Nunito + Poppins
```

<br/>

---

## 📁 Struktur File

```
mathrush/
├── mathrush-2.html    ← Seluruh aplikasi (HTML + CSS + JS)
└── README.md          ← Dokumentasi ini
```

**localStorage keys:**

```
mr_best      →  high score terbaik
mr_streak    →  streak terpanjang
mr_muted     →  status suara (true / false)

```

<div align="center">
**Dibuat dengan ⚛ oleh [Ahmad Januar D.K](https://github.com/TuanmudaJannZ)**

*"The important thing is to not stop questioning. Curiosity has its own reason for existing."*  
*— Albert Einstein*



> ⚠️ Menghapus cache browser akan mereset semua data yang tersimpan.

<br/>

---

<div align="center">

**MathRush** · *Learn & Grow*

Satu file HTML · Tanpa instalasi · Tanpa framework

</div>
