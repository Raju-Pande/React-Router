import { Link } from "react-router-dom";
function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      <ul>
        <Link to="/items/Items-1">
          <li>Items-1</li>
        </Link>

        <Link to="items/Items-2">
          <li>Items-2</li>
        </Link>

        <Link to="items/Items-3">
          <li>Items-3</li>
        </Link>
      </ul>
    </>
  );
}

export default Items;
