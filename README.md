# 🧠 MathRush — Learn & Grow

> Fast-paced mental math game built as a single-file HTML app. No build tools, no dependencies, no server required — just open and play.

---

## 📦 Quick Start

```bash
# Tidak perlu instalasi apapun
open mathrush-v6.html
```

Atau langsung drag-drop file ke browser. Berjalan 100% offline.

---

## 🎮 Game Modes

| Mode | Deskripsi |
|------|-----------|
| **Practice** | Belajar tanpa kehilangan nyawa. Ideal untuk pemula. |
| **Challenge** | Jawaban salah mengurangi ❤️. Kalah saat habis. |
| **Endless** | Bertahan selama mungkin. Gelombang kesulitan meningkat. |
| **Time Attack** | 60 detik blitz — sebanyak mungkin jawaban benar. |
| **Kids Mode** | Angka 1–5, timer longgar, balon konfeti tiap jawaban benar. |

---

## 📊 Tingkat Kesulitan

| Level | Rentang Angka | Operasi |
|-------|--------------|---------|
| Easy 🌱 | 1 – 10 | +, − |
| Medium ⚡ | 1 – 20 | +, −, × |
| Hard 🔥 | 1 – 50 | +, −, ×, ÷, pecahan, pangkat, akar, persen |

---

## ✨ Fitur Utama

### 🎓 Onboarding Tutorial Interaktif
Tutorial 3 langkah yang muncul otomatis untuk user baru. Setiap langkah menjelaskan mekanik game dengan tips bergambar ikon. Bisa di-skip kapan saja.

- Step 1 — Cara bermain dasar (timer, pilih jawaban, combo)
- Step 2 — Sistem reward (XP, koin, achievements)
- Step 3 — Pilihan game mode

Status tersimpan di `localStorage` — tidak muncul dua kali.

---

### 🎊 Particle System — Confetti
Efek confetti dramatis menggunakan Canvas API:

- **Level Up** → 3 burst berjeda dari tengah layar (120 partikel total)
- **Perfect Round** → Hujan confetti dari atas layar (80 partikel)
- 4 bentuk: lingkaran, kotak, segitiga, bintang
- 10 warna berbeda, fisika gravitasi + wobble + rotasi
- Auto-cleanup, `pointer-events: none` — tidak mengganggu gameplay

---

### 🔊 Sound Pack Selector
Tiga tema suara yang bisa dipilih langsung di dalam game:

| Pack | Ikon | Karakter |
|------|------|----------|
| **Default** | 🎵 | Sine/triangle waves, suara bersih |
| **Retro 8-bit** | 👾 | Square wave oscillator, crunch pixel-game style |
| **Calm Piano** | 🎹 | Triangle wave, lembut dan melodis |

Semua SFX (correct, wrong, level up, combo, power-up, dll.) memiliki variasi per pack. Pilihan tersimpan di `localStorage`.

---

### 📳 Haptic Feedback
Getaran via `navigator.vibrate()` pada perangkat mobile:

| Event | Pola Getar |
|-------|-----------|
| Jawaban salah / timeout | `[80, 30, 60]` — dua pulsa tegas |
| Level Up | `[30, 20, 30, 20, 100]` — pola perayaan |

Graceful fallback pada perangkat yang tidak mendukung.

---

### ⚡ Power-Up System

| Power-Up | Biaya | Efek |
|----------|-------|------|
| 🧊 Freeze | 10 🪙 | Hentikan timer selama 5 detik |
| ✂️ 50/50 | 15 🪙 | Eliminasi satu jawaban salah |
| ⚡ 2× XP | 20 🪙 | Double XP untuk 3 jawaban berikutnya |
| 💚 +Life | 25 🪙 | Pulihkan 1 nyawa |

---

### 🏆 Sistem Progression

- **XP & Level** — Jawaban benar memberi XP; combo melipatgandakannya
- **Koin** — Earned per jawaban benar; digunakan untuk power-up
- **Rank** — Beginner → Amateur → Pro → Legend (berdasarkan skor)
- **Achievements** — 15+ pencapaian yang bisa dibuka
- **Prestige** — Reset XP untuk badge eksklusif setelah mencapai level 20
- **Login Streak** — Bonus XP harian untuk bermain setiap hari
- **Daily Challenge** — Target harian dengan reward XP + koin

---

### 👹 Boss Round
Setiap 5 ronde, Boss Round aktif otomatis:
- Kesulitan dipaksa ke **Hard**
- Banner khusus + efek visual merah berdenyut
- Selesaikan 10 soal boss → **+50 XP + 30 🪙**

---

### 🧩 Tipe Soal

Selain soal standar, tersedia soal advanced (mode Hard/Boss):

- `a + b = ?` — Standar
- `? + b = c` — Missing Number
- `a+b ⋄ c+d` — Comparison (pilih nilai terbesar)
- `n/d × x = ?` — Pecahan
- `b² / b³` — Pangkat
- `√n = ?` — Akar kuadrat sempurna
- `x% of n = ?` — Persentase

---

### 🎨 Visual & UX

- **Dark Mode** — Toggle instan, tersimpan
- **Kids Mode** — Font lebih besar, warna cerah, balon melayang saat benar
- **Adaptive Difficulty** — Auto-naik/turun berdasarkan performa (5 benar naik, 3 salah turun)
- **Leaderboard lokal** — Top 5 skor tersimpan di device
- **Share Result** — Export skor sebagai gambar PNG via Canvas
- **Avatar** — Pilih emoji + warna background
- **Bilingual** — 🇬🇧 English / 🇮🇩 Indonesia (bisa ganti real-time)

---

## ⌨️ Keyboard Shortcuts

| Key | Aksi |
|-----|------|
| `1` | Pilih opsi kiri |
| `2` | Pilih opsi kanan |
| `R` | Restart game |
| `M` | Mute/unmute |
| `D` | Toggle dark mode |
| `F` | Aktifkan Freeze |
| `X` | Aktifkan 50/50 |
| `P` | Aktifkan 2× XP |
| `L` | Aktifkan +Life |

---

## 💾 Data & Storage

Semua data tersimpan di `localStorage` browser — tidak ada server, tidak ada akun.

| Key | Isi |
|-----|-----|
| `mr_best` | High score tertinggi |
| `mr_xp` | Total XP |
| `mr_coins` | Koin saat ini |
| `mr_streak` | Streak terpanjang |
| `mr_ach` | Daftar achievement yang terbuka |
| `mr_lb` | Leaderboard lokal (top 5) |
| `mr_dark` | Preferensi dark mode |
| `mr_soundpack` | Sound pack aktif |
| `mr_onboarded` | Status tutorial selesai |
| `mr_login_streak` | Login streak harian |

---

## 🗂️ Struktur File

```
mathrush-v6.html        ← Seluruh app dalam satu file
README.md               ← Dokumentasi ini
```

App dibangun sebagai **single-file HTML** dengan CSS dan JavaScript inline — zero dependencies, zero build step.

---

## 🛠️ Teknologi

- **Vanilla HTML/CSS/JS** — tidak ada framework
- **Web Audio API** — sintesis suara real-time (tanpa file audio)
- **Canvas API** — sistem partikel konfeti + share image
- **localStorage** — persistensi data
- **navigator.vibrate()** — haptic feedback mobile
- **Google Fonts** — Nunito + Poppins

---

## 📋 Changelog

### v6 — Visual & UX Update
- ✅ Onboarding tutorial interaktif 3 langkah (bisa skip)
- ✅ Particle system — confetti burst saat level up & perfect round
- ✅ Sound pack selector — Default, Retro 8-bit, Calm Piano
- ✅ Haptic feedback via `navigator.vibrate()` saat jawaban salah

### v5
- ✅ Power-up system (Freeze, 50/50, 2× XP, +Life)
- ✅ Boss round setiap 5 ronde
- ✅ Time Attack mode (60 detik)
- ✅ Adaptive difficulty
- ✅ Kids mode
- ✅ Share result sebagai gambar
- ✅ Leaderboard lokal
- ✅ Prestige system
- ✅ Login streak harian
- ✅ Avatar customization

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran. Bebas digunakan dan dimodifikasi.
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
