# ✦ Indra Dermawan — IT & Digital Portfolio

<p align="center"><strong>Build · Fix · Improve</strong><br><sub>Technology that solves real problems.</sub></p>

<p align="center">
<a href="https://indradermawan-id.github.io/">🌐 Live Portfolio</a> ·
<a href="https://github.com/indradermawan-id">💻 GitHub</a> ·
<a href="mailto:indradermawan@simeuluekab.go.id">✉️ Email</a>
</p>

---

## 👋 Tentang Saya

Saya **Indra Dermawan**, praktisi IT dengan pengalaman di lingkungan pemerintahan dan minat pada **programming, web development, IT support, hardware, serta solusi digital**.

Saya menikmati proses mengubah masalah yang rumit menjadi solusi yang sederhana, terukur, dan benar-benar dapat digunakan.

> **Teknologi yang baik bukan yang paling rumit — tetapi yang paling membantu.**

### 💼 Fokus saya

- 💻 **Software** — website, aplikasi, programming, database.
- 🛠️ **Hardware** — PC, laptop, printer, upgrade dan maintenance.
- 🧠 **Problem Solving** — diagnosis, troubleshooting, dan perbaikan.
- 📊 **Digital Workflow** — data, administrasi, dokumentasi, dan proses kerja.
- 🤖 **AI & Productivity** — eksplorasi AI untuk pekerjaan digital.

## 🎓 Pendidikan

- **D-III Teknologi Komputer** — LP3I Banda Aceh
- **S1 Informatika** — Universitas Ubudiyah Indonesia Banda Aceh

## 🧩 Pengalaman

- Guru IT
- Operator Komputer
- Operator Sistem Informasi Administrasi Kependudukan
- IT Support & Troubleshooting
- Pengembangan solusi digital

## 🏅 Pelatihan

- Pelatihan Dasar CPNS
- Pengolahan Data
- Dasar-Dasar Komputer
- Penggunaan AI

---

## 🚀 What I Do

| Area | Yang saya kerjakan |
|---|---|
| 💻 Web & Application | Website, aplikasi, frontend, backend, database |
| 🧑‍💻 Programming | PHP, Laravel, JavaScript, Python, SQL |
| 🛠️ IT Support | Troubleshooting software, OS, network, configuration |
| 🖥️ Hardware | PC, laptop, printer, RAM, SSD, peripheral |
| 📊 Digital Administration | Data, workflow, documentation, system |
| 🤖 AI | AI-assisted workflow & productivity |

---

## 🧪 Project Lab

Portfolio ini tidak hanya menunjukkan **hasil**, tetapi juga sedikit memperlihatkan **cara saya bekerja**.

### 01 · 💻 SIAP — Sistem Informasi Agenda Pelayanan

Solusi digital untuk mengelola agenda pelayanan agar lebih terstruktur, mudah dipantau, dan siap dikembangkan.

`PHP` `Laravel` `MySQL` `Workflow`

```php
class AgendaService
{
    public function create($data)
    {
        return Agenda::create([
            'tanggal' => $data['tanggal'],
            'layanan' => $data['layanan'],
            'status'  => 'scheduled'
        ]);
    }
}
```

### 02 · 🌐 Modern Portfolio

Website personal dengan responsive layout, micro-interaction, reveal animation, dan pendekatan performance-first.

`HTML` `CSS` `JavaScript`

```javascript
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
});
```

### 03 · 🛠️ Computer, Laptop & Printer Service

Service berbasis diagnosis:

`DIAGNOSE → FIX → TEST → READY`

Fokus:

- 🔍 Diagnosis
- 🧹 Cleaning & maintenance
- 💾 RAM / SSD upgrade
- 🖨️ Printer setup
- 🧰 OS & software installation
- 🌐 Network configuration

### 04 · 📊 Digital Workflow & Data

```text
INPUT
  ↓
PROCESS
  ↓
VALIDATION
  ↓
DATA
  ↓
RESULT
```

Tujuannya membuat pekerjaan lebih cepat, rapi, mudah dipantau, dan mudah ditelusuri.

---

## 🧰 Technology Toolbox

**Programming**  
`PHP` `Laravel` `JavaScript` `Python`

**Database**  
`MySQL` `SQL Server`

**Web**  
`HTML5` `CSS3` `Bootstrap` `Responsive Web`

**IT Support**  
`Windows` `Troubleshooting` `Networking` `Installation` `Maintenance`

**Hardware**  
`PC` `Laptop` `Printer` `RAM` `SSD` `Peripheral`

**Digital**  
`Data Management` `Digital Administration` `Workflow` `Documentation`

---

## 🧠 Cara Saya Menyelesaikan Masalah

```text
┌──────────┐
│ OBSERVE  │  memahami kebutuhan
└────┬─────┘
     ↓
┌──────────┐
│ DIAGNOSE │  menemukan akar masalah
└────┬─────┘
     ↓
┌──────────┐
│ BUILD /  │  membuat atau memperbaiki
│   FIX    │
└────┬─────┘
     ↓
┌──────────┐
│  TEST    │  memastikan solusi stabil
└────┬─────┘
     ↓
┌──────────┐
│ IMPROVE  │  evaluasi dan pengembangan
└──────────┘
```

---

## ⚡ Performance First

Portfolio ini sendiri dibangun dengan prinsip performa:

- `IntersectionObserver` untuk reveal animation
- `requestAnimationFrame` untuk pekerjaan visual
- `content-visibility: auto`
- WebP image
- passive scroll listener
- transform-based animation
- reduced-motion support
- pengurangan blur/compositing mahal
- visual layer yang lebih ringan di mobile

**Targetnya:** tetap terasa premium tanpa membuat browser bekerja terlalu keras.

---

## 📱 Mobile Experience

Mobile diperlakukan sebagai pengalaman utama, bukan sekadar versi kecil desktop.

- Tidak ada horizontal overflow.
- Spacing dibuat lebih rapat.
- Typography menyesuaikan layar.
- Card tidak keluar viewport.
- Dekorasi dikurangi jika tidak diperlukan.
- Konten tetap menjadi prioritas.

---

## 🗂️ Struktur

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    └── profile.webp
```

## 🚀 Deployment

Project ini dapat langsung digunakan di **GitHub Pages**.

1. Push project ke repository.
2. Pastikan `index.html` ada di root.
3. **Settings → Pages**
4. Pilih branch deployment.
5. Pilih `/root`.
6. Save.

---

## 🎨 Design Direction

**Dark Editorial × Developer Interface × Digital Lab**

Visual portfolio sengaja dibuat seperti digital workspace:

- `kode` → menunjukkan programming
- `device lab` → menunjukkan hardware & service
- `workflow` → menunjukkan digital administration
- `micro-interaction` → membuat browsing terasa hidup
- `performance-first` → memastikan pengalaman tetap nyaman

---

## 📬 Let's Connect

Jika ingin berdiskusi mengenai:

💻 Web / Application · 🧑‍💻 Programming · 🛠️ IT Support · 🖥️ Hardware · 🖨️ Printer · 📊 Digital Administration · 🤖 AI

**🌐 Portfolio**  
https://indradermawan-id.github.io/

**💻 GitHub**  
https://github.com/indradermawan-id

**✉️ Email**  
indradermawan@simeuluekab.go.id

---

<p align="center">
<strong>Indra Dermawan</strong><br>
<sub>IT • Digital • Web • Hardware</sub><br><br>
<em>Build something useful. Fix what matters. Keep improving.</em>
</p>
