import { Link } from "react-router-dom";
import "./pagination.scss";

function Pagination() {
  return (
    <div className="pagination pagination-wrapper">
      <Link className="pagination__go-back" to={-1}>
        <svg
          width="38.000000"
          height="38.000000"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <circle
            id="Ellipse 26"
            cx="19.000000"
            cy="19.000000"
            r="19.000000"
            fill="#FFFFFF"
            fillOpacity="1.000000"
          />
          <circle
            id="Ellipse 26"
            cx="19.000000"
            cy="19.000000"
            r="18.500000"
            stroke="currentColor"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
          />
          <path
            id="↳ Icon Color"
            d="M20.77 14.91C21 14.64 20.97 14.24 20.7 14.01C20.43 13.78 20.02 13.81 19.79 14.08L15.94 18.58C15.73 18.82 15.73 19.17 15.94 19.41L19.79 23.91C20.02 24.18 20.43 24.21 20.7 23.98C20.97 23.75 21 23.35 20.77 23.08L17.27 19L20.77 14.91Z"
            fill="currentColor"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Pagination;
