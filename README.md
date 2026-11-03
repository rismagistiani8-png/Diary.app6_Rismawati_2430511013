# Aplikasi Buku Harian (Diary App) 📖

Proyek aplikasi mobile berbasis **React Native** menggunakan **Expo Router** dan **TypeScript**[cite: 8]. Aplikasi ini dikembangkan untuk mencatat aktivitas harian, mengatur suasana hati (*mood*), serta mengelola catatan favorit[cite: 8].

---

## ✨ Fitur Utama

- **Navigasi Tab Bawah (Bottom Tabs):** Akses mudah antar halaman utama (Home), tambah catatan, daftar favorit, dan pengaturan[cite: 8].
- **Pencarian & Filter Pintar (`useDiarySearch`):** Mencari isi diary berdasarkan kata kunci teks sekaligus menyaring berdasarkan ikon *mood* (😊, 🚀, ☕, ✨)[cite: 8].
- **Manajemen Favorit (`useLikedEntries`):** Menandai entri tertentu sebagai favorit dan melihatnya secara khusus pada tab **Favorit** secara *real-time*[cite: 8].
- **Desain Kustom:** Menggunakan sistem *Design Tokens* konsisten untuk warna, jarak, dan tipografi[cite: 8].

---

## 🛠️ Daftar Hooks Utama yang Digunakan

1. **`useState`** — Mengelola state lokal untuk input form, kata kunci pencarian (`query`), filter mood aktif (`selectedMood`), dan pengaturan tema.
2. **`useMemo`** — Mengoptimalkan performa aplikasi dengan melakukan *memoization* pada hasil penyaringan entri diary berdasarkan pencarian dan filter mood.
3. **`useCallback`** — Menstabilkan fungsi *callback* (seperti navigasi detail dan pengelolaan aksi) agar tidak tercipta ulang pada setiap render.
4. **`useRef`** — Mengambil referensi langsung ke komponen elemen input (misalnya untuk kontrol fokus pada kolom pencarian).
5. **`useLocalSearchParams`** — Mengambil parameter dinamis dari URL rute pada halaman detail entri diary (`/detail/[id]`).

---

## 🚀 Cara Menjalankan Proyek di Lokal

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/rismagistiani8-png/Diary.app6_Rismawati_2430511013.git](https://github.com/rismagistiani8-png/Diary.app6_Rismawati_2430511013.git)

<img width="959" height="458" alt="image" src="https://github.com/user-attachments/assets/59f33de6-0ec5-476c-88c0-6e0c51db5d3d" />
<img width="958" height="456" alt="image" src="https://github.com/user-attachments/assets/adc32c91-9234-4089-b288-a365df5c58b3" />
<img width="959" height="464" alt="image" src="https://github.com/user-attachments/assets/d386793e-8f35-4642-8dd9-7b0d7c80995f" />
<img width="959" height="464" alt="image" src="https://github.com/user-attachments/assets/92bacae0-d084-4ca6-855e-bd2aebc7fede" />




