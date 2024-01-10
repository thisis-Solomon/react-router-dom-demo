import { Link } from "react-router-dom";

export default function MainNavigation(): JSX.Element {
  return (
    <nav>
      <ul className="flex gap-x-4 place-content-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
