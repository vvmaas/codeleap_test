import styled from 'styled-components';

export default function Input({ placeholder, variant = 'outlined', value='', onChange = () => 0 }) {
  return  (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} variant={variant} />
  );
}

const StyledInput = styled.input`
  border: 1px solid #777777;
  border-radius: 8px;
`