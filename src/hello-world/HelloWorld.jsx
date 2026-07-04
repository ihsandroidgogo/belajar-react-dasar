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

function ParagrafText(){
  const teks = "Selamat Belajar React JS!"
  const style = {
    color : "blue",
    backgroundColor : "yellow"
  }

  return(
    <p style={style}>{teks}</p>
  )
}