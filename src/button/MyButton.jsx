export default function MyButton({ teks, onSmash }) {
  return (
    <button onClick={onSmash} style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
      {teks}
    </button>
  );
}