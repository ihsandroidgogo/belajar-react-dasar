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

**Destructuring Props**
Menggunakan destructuring paramater pada props, mempermudah membaca attribut yang tersedia pada component dan dia javascript object jadi bisa ditambahkan default value pada props.

Untuk mengirim props bisa menggunakan attribute seperti HTML element ketika menggunakan Component

Contoh :
```bash
export default function HelloWorld() {
  return (
    <div>
        <HeaderHelloWorld teks="Hello, World!" />
        <ParagrafText/>
    </div>
  );
}

function HeaderHelloWorld({teks="Ups lupa kasih teks"}){
  return (
    <h1 style={{
      color : "red",
      backgroundColor : "aqua"
    }}>{teks}</h1>
  )
}
```

**Spread Syntax**
Mengirim props dari parent component ke child component bisa merepotkan jika ada banyak sekali child nya.

Jika hanaya ingin melakukan foward semua props ke child component bisa menggunakan Spead Syntax.

```bash
<HeaderHelloWorld {...props}/>
```

**Nested Component**

JSX mendukung pembuatan Nested Component, sehingga bisa membuat Component yang didalamnya bisa ditambahkan component lain secara dinamis.

Untuk component bisa memiliki component lain di dalanmya bisa menggunakan attribute children pada Props.

Contoh membuat Component bernama Container dan di dalam nya berisi Component lain nya.

Contoh :
```bash
export default function Container({ children }) {
  return (
    <div>
        <h1>Ihsandroid Gogo</h1>
            {children}
        <footer>
            <p>Copyright &copy; 2026 Ihsandroid Gogo</p>
        </footer>
    </div>
  );
}
```
Nama parameter nya harus **children**.

**Style**
Menggunakan style CSS bisa memakai file CSS atau langsung di attribut style menggunakan kurung kurawal.

Menggunakan Style pada JSX tidak menggunakan atribut class, melainkan className.

**Conditional**

Saat membuat halaman web, sering sekali kita menampilkan tampilan berbeda pada kondisi tertentu hal ini bisa dilakukan dengan JSX.

Kita bisa menambahkan kondisi Javascript dan mengembalikan Component yang berbeda berdasarkan kondisi yang di inginkan.

Contoh kita bisa membuat halaman todolist, dan jika todo nya sudah selesai kita coret element teks nya.

Contoh bisa cek 

```bash
todolist/Todolist.jsx
```
Untuk main.jsx masih pakai file yang sama di 
```bash
hello-world/main.jsx
```

**Null Component**

Pada kasus tertentu, mungkin ada kondisi dimana kita ingin mengembalikan Component atau tidak ingin mengembalikan Component apapun.

Kita bisa mengembalikan null untuk menandai bahwa tidak ada Component yang kita kembalikan.

**Ternary Operator**

Pada kasus yang lebih sederhana kita bisa gunakan Ternary Operator Javascript di JSX.

**Collection Component**

Pasti kita sering menampilkan Component yang sama berulang ulang sesuai koleksi data, JSX sendiri tidak memiliki fitur perulangan.

Untuk menampilkan multiple Component, sama seperti Conditional, kita akan memanfaatkan Javascript.

Kita bisa menggunakan Javascript Array untuk mengubah data Array menjadi Component, contoh menggunakan method **map()**pada Array.

Contoh :

```
import Todo from "./Todo";

export default function TodoList(){

    const data = [
        {
            teks : "Belajar HTML",
            sudahSelesai : true,
        },
          {
            teks : "Belajar CSS",
            sudahSelesai : true,
        },
          {
            teks : "Belajar Javascript",
            sudahSelesai : true,
        },
          {
            teks : "Belajar ReactJS",
            sudahSelesai : false,
        },

    ]

    const todos = data.map((todo) => {
        return <Todo {...todo}/>
    })

    return (
        <ul>
            {todos}
        </ul>
    )
}
```

**Component Key**

Saat membuat Collection Component tiap component diperlukan id (unique,string,number) menggunakan attribute key

Component key diperlukan agar React bisa mengenali Component ketika berubah, seperti posisi nya di hapus, diubah, ditambahkan pada collection.

Biasanya Component Key akan diambil dari data, sehingga lebih konsisten.

Contoh :

```
const data = [
  {
  id:0,
  teks:"learn HTML,
  sudahSelesai: true
  }
]

return (
  <ul>
    {data.map(todo) => {
      return <Todo key={todo.id} {...todo}/>
    }}
  </ul>
)
```

**Pure Function**

Pure function bisa disebutkan jika memenuhi dua kriteria berikut
- function mengembalikan nilai yang sama untuk nilai parameter yang sama
- function tidak memiliki efek samping, tidak ada perubahan pada variable non local (variable yang berada diluar function).

Contoh :

```
/// pure function
export function double(num){
  return num * 2;
}

/// bukan pure function
let count = 0;
export function increment (){
  count++;
  return count;
}
```

Lalu apa hubungan nya dengan React? react mengasumsi bahwa setiap component yang kita buat adalah **Pure Function**.

ini berarti bahwa react component yang kita buat harus selalu mengembalikan JSX yang sama dengan input yang sama.

Walaupun sebenarnya kita bisa saja membuat React Component yang tidak Pure, tapi sangat tidak disarankan, karena setiapp memanggil component dengan input sama bisa menghasilkan nilai yang tidak konsisten.

Lalu bagaimana cara membuat pure component? contoh disini kita akan membuat component Row dan Table.

```bash
kita bisa pindahkan variable counter menjadi local variable di Table dan gunakan Props sebagai counter nya.
```

**Dimana bisa melakukan effect samping?**

React menyediakan tempat khusus jika kita ingin membuat Component yang bisa menghasilkan efek samping

Efek samping dari component biasanya ditempatkan di **Event Handler**, _yaitu aksi yang terjadi ketika berinteraksi dengan Component._

Atau ketika misal Component tergantung dengan external system (misal API), maka React menyediakan **function useEffect()**.