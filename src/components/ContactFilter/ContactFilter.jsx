export const ContactFilter = ({ filter, title, onChange }) => {
  return (
    <label>
      {title}
      <input
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value)}
      />
      ;
    </label>
  );
};
