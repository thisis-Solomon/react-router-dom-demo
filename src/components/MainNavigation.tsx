import { NavLink } from "react-router-dom";

export default function MainNavigation(): JSX.Element {
  return (
    <nav className="py-4 bg-stone-300">
      <ul className="flex gap-x-4 place-content-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
