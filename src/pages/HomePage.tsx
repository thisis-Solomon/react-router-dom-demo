import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {
  return (
    <>
      <h1 className="font-bold text-2xl p-2">Home page </h1>
      <p>
        Go to the <Link to="/products">products</Link>
      </p>
    </>
  );
}
