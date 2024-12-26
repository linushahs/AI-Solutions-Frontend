import { Link } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import Solutions from "../pages/Solutions";
import ContactUs from "./ContactUs";

const Breadcrumb = ({
  items = [
    {
      label: "Portfolio",
      href: <Portfolio />,
    },
    {
      label: "Solutions",
      href: <Solutions />,
    },
    {
      label: "Contact Us",
      href: <ContactUs />,
    },
    {
      label: "More",
    },
  ],
}) => {
  return (
    <nav aria-label="Breadcrumb" className="pt-3">
      <ol className="flex items-center space-x-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-700 flex items-center"
          >
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium">{item.label}</span>
            ) : (
              <Link
                to={item.href}
                className="text-gray-500 hover:text-gray-700"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
