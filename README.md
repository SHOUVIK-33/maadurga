# 🪔 Navratri Bhakti — Maa Durga Navratri Website

Ek sampoorn, responsive aur SEO-optimized static website — **Navratri 2026/2027**, Maa Durga ke **9 Roop (Navadurga)**, **Stotram & Aarti hub**, **51 Shaktipeeth**, **Puja Vidhi & Samagri**, aur **interactive bhakti** features ke saath.

Jai Mata Di 🙏

---

## ✨ Features

### 1. Home / Hero
- Animated **mandala + trishul** hero emblem (pure SVG, koi external image nahi).
- **Audio Toggle** — background mein soft tanpura drone + ghanti chimes (Web Audio API se, bina kisi audio file ke bhi chalta hai; mute/unmute).
- **Live Countdown** — agli Navratri tak din/ghante/minute/second (2026–2027 ki tithiyan built-in).
- **Aaj ka Shlok / Vichar** — har din badalne wala Sanskrit shlok, Hindi aur English arth ke saath.
- **Quick Navigation Cards** — 9 Roop, Navratri Dates, Aarti/Stotram, Shaktipeeth.

### 2. Navratri & Seasonal Significance
- Saal ki **4 Navratri** ka bhed — Sharad, Chaitra, Magha Gupt, Ashadha Gupt.
- **Pauranik Katha** — Mahishasura vadh ki katha.
- **Seasonal Science** — ritu-parivartan aur vrat ke swasthya labh.
- **Dates table** (2026 & 2027).

### 3. Navadurga — 9 Roop
- Har roop ke liye expandable card: **Vahan, Mantra, Beej Mantra, Bhog, Rang, Shastra, Phal aur Katha**.
- Shailaputri → Brahmacharini → Chandraghanta → Kushmanda → Skandamata → Katyayani → Kalaratri → Mahagauri → Siddhidatri.

### 4. Stotram, Aarti & Mantra Hub
- Mahishasura Mardini, Durga Chalisa, Argala, Siddha Kunjika, Durga Saptashati, Devi Kavacham.
- **Lyrics Reader** — audio ke saath ek-ek line highlight hoti hai.
- **PDF Downloads** (3 booklets, Devanagari mein) — neeche dekhein.

### 5. 51 Shaktipeeth & Mandir Directory
- Poore **51 Shaktipeeth** ki list — sthaan, ang/aabhushan, Shakti (Devi) aur Bhairav.
- **Search + country filter**.
- **Map** (OpenStreetMap embed).
- Pramukh mandir: Kamakhya, Vaishno Devi, Vindhyachal, Kalighat, Dakshineswar, Maihar Devi.

### 6. Puja Vidhi, Samagri & Color Codes
- **Color of the Day** — 9 din ke shubh rang.
- **Ghatasthapana (Kalash Sthapana)** — step-by-step vidhi + 2026 muhurat.
- **Samagri checklist** — Puja, Hawan, Kanya Pujan.
- **Kanya Pujan & Hawan guide**.

### 7. Interactive & Community
- **Virtual Diya** — click karke jalayein (flame + halo animation).
- **Virtual Ghanti** — click karke bajayein (real bell tone + ring animation).
- **Wallpapers & Status Graphics** — 4 high-res SVG posters, download button ke saath.
- **Devotee Wall / Prayer Request** — naam aur prarthna likh kar submit karein (browser localStorage).

### 8. Technical & SEO
- **Responsive** — mobile, tablet, desktop.
- **Fast** — no heavy images; SVG graphics + lightweight CSS/JS.
- **SEO** — meta tags, keywords, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`, semantic HTML, accessible labels.

---

## 📁 Project Structure

```
durga-navratri/
├── index.html            # Home (hero, countdown, shlok, quick nav)
├── navratri.html         # Navratri & Seasonal Significance
├── navadurga.html        # Navadurga — 9 Roop
├── stotram.html          # Stotram, Aarti & PDF hub
├── shaktipeeth.html      # 51 Shaktipeeth + mandir directory
├── puja-vidhi.html       # Puja vidhi, samagri, colors, Kanya Pujan
├── interactive.html      # Diya, ghanti, wallpapers, devotee wall
├── sitemap.xml
├── robots.txt
├── README.md
└── assets/
    ├── css/style.css
    ├── js/
    │   ├── data.js       # saara content (dates, 9 roop, shloks, 51 peeth…)
    │   └── main.js       # behaviour (countdown, audio, diya, wall…)
    ├── img/
    │   ├── durga-hero.svg
    │   └── logo.svg
    ├── pdf/
    │   ├── Durga_Saptashloki.pdf
    │   ├── Navratri_Puja_Vidhi_Samagri.pdf
    │   └── 51_Shaktipeeth_List.pdf
    └── audio/            # (khaali — apni audio files yahan daal sakte hain)
```

---

## 🚀 Kaise chalayein

Koi build step nahi chahiye. Bas:

```bash
# local server (recommended)
python3 -m http.server 8000
# phir browser mein kholein: http://localhost:8000
```

Ya seedha `index.html` browser mein khol lein.

### GitHub Pages par deploy
1. Repo banayein aur ye saari files push karein.
2. Repo → **Settings → Pages** → Source: `main` branch, `/ (root)`.
3. `sitemap.xml` aur `robots.txt` mein `https://example.com` ko apne domain se replace karein.

---

## 📖 Content update kaise karein

- **Dates / 9 roop / shlok / shaktipeeth / mandir** — sab `assets/js/data.js` mein ek jagah hain. Wahan badlein, poori site update ho jaayegi.
- **Countdown** — `NAVRATRI_DATES` array mein nayi Navratri add karein.
- **Audio** — abhi audio Web Audio API se generate hota hai (offline bhi chalta hai). Asli recording use karni ho to file `assets/audio/` mein rakhein aur `main.js` ke `initAudio()` ko `<audio>` element se jod dein.

---

## ⚠️ Note / Disclaimer

- Yeh ek **shraddha-based informational website** hai. Tithi, muhurat aur puja-vidhi mein sthaan aur sampraday ke hisaab se antar ho sakta hai — apne sthanik panchang aur kula-guru se pushti karein.
- Shaktipeeth list ke naam aur ang/aabhushan par sroton mein matbhed milta hai; yahan sarvadhik prachalit manyata di gayi hai.
- Vrat/upvas ek vyaktigat nirnay hai — health conditions mein doctor se salaah lein.
- Devotee Wall abhi demo hai (data browser mein hi rehta hai). Asli community wall ke liye backend jodna hoga.

---

## 📜 License

Content bhakti-bhav se, public reference ke liye. Code freely use kar sakte hain.

**॥ जय माता दी ॥**
