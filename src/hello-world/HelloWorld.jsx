import './HelloWorld.css';

export default function HelloWorld() {

  const props = {
    teks : "Hello, React!"
  }

  return (
    <div>
        <HeaderHelloWorld {...props}/>
        <ParagrafText/>
    </div>
  );
}

function HeaderHelloWorld({teks="Ups lupa kasih teks"}){
  return (
    <h1 className="title">{teks}</h1>
  )
}

function ParagrafText(){
  const teks = "Selamat Belajar React JS!"
  return(
    <p className="content">{teks}</p>
  )
}