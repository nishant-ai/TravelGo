import '../components/App.css'
import MenuItems from '../components/Submenu'

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel =depthLevel + 1;
    const dropdownClass = depthLevel > 0 ? "dropdown-submenu" : "";

    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "" : "show"}`}>
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    )
}

export default Dropdown;