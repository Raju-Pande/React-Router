import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function ItemsDetails() {
    const param=useParams()
    console.log(param);
  return (
    <>
      <main>
        <h1>ItemsDetails</h1>
        <Link to="items"> Back</Link>
      </main>
    </>
  );
}
export default ItemsDetails;
