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

**Event Handler**

Di React Component dan HTML Element kita bisa menambahkan Event Handler.

Untuk menambah event handler kita akan tambahkan function sebagai handler nya, bisa dalam bentuk anonymous function, arrow function, atau membuat function terlebih dahulu di dalam scope component nya

Nama Function untuk handler biasanya diawali dengan nama 'handle' dan diikuti dengan jenis event handler misal :

```bash
handleClick()
handleMouseEnter()
```

Contoh :

```
export default function TombolAlert({teks}){
    function handleClick(){
        alert("Button di klik")
    }

    return  (
        <button onClick={handleClick}>{teks}</button>
    )
}
```

_Membaca Props di Event Handler_

Keuntungan membuat function event handler di dalam component adalah kita bisa membaca Props yang digunakan Component tersebut.

_Event Handler sebagai Props_

Props adalah Javascript Object, jadi bisa memiliki attribute dengan tipe function, karena itu kita juga bisa membuat event handler di Props.

Saat membuat attribute di Props yang berisikan Event Handler, biasa nya nama attribute nya akan di awali dengan 'on', contoh 'onSmash','onHit' dan lain lain.

Contoh :
```
MyButton.jsx
export default function MyButton({ teks, onSmash }) {
  return (
    <button onClick={onSmash} style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
      {teks}
    </button>
  );
}

Main.jsx
      <MyButton teks="Klik Saya!" onSmash={() => alert("Anda telah SMASH tombol ini!")} />
```

Docs : 
https://react.dev/reference/react-dom/components/common
https://id.react.dev/learn/responding-to-events

**Event Object**

Saat membuat Event Handler Function, bisa ditambahkan Event Object sebagai parameter di Function tersebut, React Event Object kompatible dengan standar DOM Event Object.

Contoh :
```bash
<button onClick={namaParameter => {
  console.log(namaParameter); // React event object
}} />
```

Docs :
https://react.dev/reference/react-dom/components/common#react-event-object

**Event Propagation**

Event di react component akan selalu disebarkan ke component yang ada di atas nya (Event Propagation).

Misal kita memiliki div dengan event onclick, lalu di dalamnya kita memiliki button dengan event onclick, ketika button di klik maka onclick di button akan terpicu dan selanjutnya onclick di div juga akan terpicu.

kadang mungkin kita tidak ingin terjadi, maka kita bisa hentikan proses nya dengan method stopPropagation().

**Prevent Default**

Prevent default bergunakan ketika membuat event handler yaitu ketika ingin menghentikan default action.

Biasa nya kita membuat Form, ketika dipicu event onClick, kita ingin hentikan default action Form Submit.

**Side Effect**

Component boleh memiliki Side Effect namun biasanya terjadi dikarenakan adanya interaksi dari pengguna melalui event handler

Contoh kita membuat form say hello, dimana ketika button di klik, kita ingin menampilkan Hello + nama pada Text.

**DOM Manipulation**

Sebenarnya DOM Manipulation tidak direkomendasikan, terutama jika misal data yang memicu perubahan Element di Component bersumber dari berbagai Event Handler, maka dari itu sangat disarankan menggunakan **"State"**.

**Hooks**

React Hooks adalah fungsi khusus di React yang memungkinkan kita menggunakan state dan fitur React lainnya (seperti lifecycle, context, refs) di dalam function component — tanpa perlu menulis class component.

_Hooks yang paling sering dipakai_
useState — menyimpan dan mengubah state di function component
```bash
const [count, setCount] = useState(0);
```
useEffect — menjalankan "efek samping" (side effect): fetch data, subscribe event, manipulasi DOM, dll. Menggantikan componentDidMount, componentDidUpdate, componentWillUnmount

```bash
useEffect(() => {
  fetchData();
}, []); // array kosong = jalan sekali saat mount
```

dan lain sebagainya.

Docs : https://react.dev/reference/react/hooks

**State**

Component kadang perlu untuk berubah dikarenakan interaksi yang dilakukan pengguna, seperti input di klik bisa menaikkan data counter, tombol next bisa mengubah gambar banner yang sedang muncul, dsn.

Component harus bisa mengingat nilai saat ini seperti counter saat ini atau gambar saat ini, di react memori spesific di component disebut _State_.

_State menggunakan Local variabel biasa_

Apakah local variable biasa di Component bisa digunakan di State? sayangnya hal ini tidak bisa dilakukan, ketika react melakukan render Component untuk yang kedua kali dan seterus nya maka semua kode Component akan di eksekusi ulang, oleh karena itu local variable akan kembali ke nilai awal.

Perubahan di local variable juga tidak akan memicu render ulang Component.

**useState**

Untuk membuat state, kita bisa menggunakan function _useState(initial)_
Function useState akan mengembalikan array dengan dua nilai, pertama adalah State nya, dan kedua ada Function untuk mengubah value di state tersebut.

Component yang menggunakan State tersebut akan secara otomatis di Render.

_State terisolasi dar private_

State merupakan data yang terisolasi dan private secara lokal terhadap component yang menggunakan nya.

artinya jika kita me-render component yang sama berkali kali, maka State dari tiap component tersebut akan terpisah satu sama lain.

**Render **

Sebelum Component yang kita buat ditampilkan di layar, Component harus di render di React, oleh karena itu kita perlu tahu bagaimana cara kerja proses React ini ketika menampilkan component yang kita buat.

Ada 3 Tahapan proses menampilkan Component di React :
- Pertama, trigger (memicu) proses render
- Kedua, melakukan proses render Component
- Ketiga, menempatkan hasil render Component ke DOM

_Proses Render :_

Trigger Render -> Render Component -> Commit to DOM

