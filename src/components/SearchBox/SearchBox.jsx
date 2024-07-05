export default function SearchBox({ filter, onAction }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => onAction(e.target.value)}
      ></input>
    </>
  );
}
