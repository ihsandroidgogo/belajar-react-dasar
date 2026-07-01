# React + Vite

Belajar React JS (Versi 19.2.7)

**Membuat Component**

Component dibuat dalam satu file JSX dengan nama sesuai dengan nama komponent jika buat component HelloWorld maka nama file nya **HelloWorld.jsx** (CamelCase).

Lalu buat default function nya dengan nama component dan return dari function tersebut adalah element UI yang akan ditampilkan.

File bisa di taruh di **src/hello-world/HelloWorld.jsx**


**Menampilkan Component**

Untuk menampilkan Component perlu instance dari React Root dengan method:
```
createRoot(element)
```
Lalu bisa gunakan method render(component), lalu component StrictMode membantu mencari masalah saat development.

Lalu perhatikan html nya id nya harus root sehingga React mengambil dari element by Id nya root.

Sehingga nanti yang dipanggil HTML nya dengan script type nya dari component yang sudah dibuat.

Lokasi file nya bisa di cek di **src/hello-world/main.jsx**

**Vite Config**

Untuk bisa menampilkan beberapa file HTML karena menggunakan vite, kita harus menambahkan beberapa baris kode di vite.config.js nya,seperti ini :
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        hello_world: './hello-world.html'
      }
    }
  }
})
```
Lalu bisa jalankan **npm run build** nya biasa nya nanti muncul file nya di folder 'dist', nanti bisa coba jalankan lagi untuk mengecek hasil nya.

Karena tadi buat untuk component HelloWorld dan hello-world.html, bisa coba buka http://localhost:5173/hello-world.html

**Aturan JSX**
Component hanya boleh mengembalikan satu element, jika ingin beberapa element harus di bungkus di dalam parent element.

Wajib Menutup semua tag element

Attribute menggunakan camelCase, karena akan di konversi ke variable javascript jadi penulisan wajib mengikuti cara javascript, **contoh className (bukan class-name)**.