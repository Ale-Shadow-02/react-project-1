import React, { Component } from "react";
import c from "./Module.module.css";

export default class Module extends Component {
  render() {
    return (
      <header className={c.header}>
        <div className={c.body}>
          <ul className={c.list}>
            <li className={c.item}>
              <a href="#" className={c.link}>
                Home
              </a>
            </li>
            <li className={c.item}>
              <a href="#" className={c.link}>
                About
              </a>
            </li>
            <li className={c.item}>
              <a href="#" className={c.link}>
                Contacts
              </a>
            </li>
            <li className={c.item}>
              <a href="#" className={c.link}>
                Portpfolio
              </a>
            </li>
            <li className={c.item}>
              <a href="#" className={c.link}>
                Shop
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
