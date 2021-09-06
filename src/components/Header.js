import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <div className="header">
      <Link to="/cart"><AiOutlineShoppingCart /></Link>
    </div>
  )
}
