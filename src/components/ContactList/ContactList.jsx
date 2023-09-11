export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
