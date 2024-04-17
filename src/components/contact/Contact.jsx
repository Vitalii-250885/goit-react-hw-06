import css from "./Contact.module.css";

import { BsPersonFill, BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ name, number, handleDelete }) => {
  return (
    <li className={css.item}>
      <div>
        <div className={css.description}>
          <BsPersonFill />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.description}>
          <BsFillTelephoneFill />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete} type="button" className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
