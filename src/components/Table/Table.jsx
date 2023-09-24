import React, { useState } from 'react';
import s from './Table.module.scss';
import elements from './data.js';
import SideBar from '../SideBar/SideBar';
import Letter from '../../assets/icons/letterGrey.svg';

const Table = ({ setMenuActive, menuActive, activeItem, setActiveItem }) => {
  const [sum, setSum] = useState(0);

  const addFav = (e) => {
    if (e.currentTarget.checked) {
      let price = Number(e.currentTarget.dataset.price);
      setSum((prev) => (prev += price));
    } else {
      let price = Number(e.currentTarget.dataset.price);
      setSum((prev) => (prev -= price));
    }
  };

  return (
    <div className={s.table_container}>
      <div className={s.container}>
        <div className={s.table}>
          <div className={s.table_header}>
            <p className={s.services_title}>Services</p>
            <p className={s.choose_title}>Choose</p>
            <p className={s.prices_title}>Prices</p>
          </div>
          <div className={s.table_content}>
            {elements.map((item) => (
              <div className={s.table_content_container}>
                <div key={item.id} className={s.table_content_top}>
                  <p className={s.table_title}>{item.title}</p>
                  <label
                    className={s.table_checkbox}
                    htmlFor={'checkbox' + item.id}>
                    <input
                      data-price={item.price}
                      data-id={item.id}
                      onChange={(e) => addFav(e)}
                      id={'checkbox' + item.id}
                      type="checkbox"
                    />
                    <div></div>
                  </label>
                  <p className={s.table_price}>${item.price}</p>
                </div>
                {item.childes.map((ite) => (
                  <div className={s.table_child} key={ite.id}>
                    <p className={`${s.table_title} ${s.child_title}`}>
                      {ite.title}
                    </p>
                    <label
                      className={s.table_checkbox}
                      htmlFor={'checkbox' + ite.id}>
                      <input
                        data-price={ite.price}
                        data-id={ite.id}
                        onChange={(e) => addFav(e)}
                        id={'checkbox' + ite.id}
                        type="checkbox"
                      />
                      <div></div>
                    </label>
                    <p className={s.table_price}>${ite.price}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={s.table_footer}>
            <p className={s.footer_title}>Total</p>
            <p className={s.table_price}>${sum}</p>
          </div>
        </div>
        <div className={s.buttons}>
          <button className={s.email_button}>
            <img src={Letter} alt="letter-icon" />
            Enter your E-mail
          </button>
          <button className={s.order_button}>Order</button>
        </div>
      </div>
      <SideBar
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </div>
  );
};

export default Table;
