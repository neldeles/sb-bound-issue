import PropTypes from "prop-types";
import "./index.css";

/**
 * Functionally acts as links to navigate to the different pages of your web app.
 */

function NavItem({ label, href, icon: Icon }) {
  return (
    // if item has no submenu items
    <div>
      <a href={href} className="navItem">
        <Icon className="icon" aria-hidden="true" />
        {label}
      </a>
    </div>
  );
}

export { NavItem };

NavItem.propTypes = {
  /** Label of the navigation item */
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  /** Boolean to determine if the navigation item is the current page or not */
  /** We are using the [Heroicons](https://github.com/tailwindlabs/heroicons) React library.
   * Pass the constructor as an argument i.e. `icon={HomeIcon}`
   */
  icon: PropTypes.oneOfType([PropTypes.func]),
};

NavItem.defaultProps = {
  current: false,
};
