import Contact from "../Contact/Contact";
import css from "../../components/ContactList/ContactList.module.css";

export default function ContactList({ elementsList, onDelete }) {
  return (
    <>
      <ul>
        {elementsList.map((element) => (
          <li className={css.item} key={element.id}>
            <Contact elementData={element} />
            <button
              type="button"
              className={css.delete_button}
              onClick={() => {
                return onDelete(element.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
