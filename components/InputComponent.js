import styled from "styled-components";

export default function InputComponent({
  labelText,
  placeholder,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <StyledInput
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

const StyledInput = styled.input`
  border: 2px solid purple;
  background-color: lightgrey;
  padding: 0.5rem;
`;
