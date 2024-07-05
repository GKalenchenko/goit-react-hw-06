import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import css from "../../components/Contact/Contact.module.css";

export default function Contact({ elementData: { name, number } }) {
  return (
    <>
      <div>
        <div className={css.contact_wrapper}>
          <BsFillTelephoneFill />
          <p>{name}</p>
        </div>
        <div className={css.contact_wrapper}>
          <BsFillPersonFill />
          <p>{number}</p>
        </div>
      </div>
    </>
  );
}
