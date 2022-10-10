import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Dropdown from './Dropdown'
import '../components/App.css'

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
      const handler = (event) => {
        if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
        }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
      };
    }, [dropdown]);

    const onMouseEnter = () => {
      window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };
    return (
      <ListItems ref={ref}
      >
        {items.submenu ? (
          <>
            
            <Button type="button" onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave} onClick={() => setDropdown(!dropdown)} >
              {items.title}{" "} {depthLevel > 0 ? <span> &raquo; </span> : <span className="arrow"></span>}
            </Button>
            <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
          </>
        ) : (
          <a className="menu-items" href={items.url}>{items.title}</a>
        )}
      </ListItems>
    )
}

export default MenuItems;

const ListItems = styled.li`
  position: relative;
  list-style: none;
`

const Button = styled.div`
  cursor: pointer;
  color: white;
  background-color: inherit;
  border: none;
  margin-left: 14px;
  font-size: 16px;
  font-weight: 540;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
`