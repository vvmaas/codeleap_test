import styled from 'styled-components';

export default function Input({ textarea=false, height='', placeholder, variant = 'outlined', value='', onChange = () => 0 }) {
  return  (
    textarea ? 
      (
        <StyledTextArea height={height} placeholder={placeholder} value={value} onChange={onChange} variant={variant} />
      )
    :
    (
      <StyledInput height={height} placeholder={placeholder} value={value} onChange={onChange} variant={variant} />
    )
  );
}

const StyledInput = styled.input`
  border: 1px solid #777777;
  border-radius: 8px;
  height: ${(props) => props.height};
  padding: 5px;
  font-size: 17px;
`

const StyledTextArea = styled.textarea`
  border: 1px solid #777777;
  border-radius: 8px;
  height: ${(props) => props.height};
  padding: 5px;
  font-size: 17px;
  font-weight: 100;

  @media(max-width: 700px) {
    height: 90px;
  }
`