import styled from "styled-components";

export default function Button({ children, ...props }) {
    return (
      <StyledButton {...props}>
        {children}
      </StyledButton>
    );
  }

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#DDDDDD' : props.color)};
  color: ${(props) => (props.disabled ? '#2626267e' : '#FFFFFF')};
  color: ${(props) => (props.color === '#FFFFFF' ? '#000000' : '')};
  color: ${(props) => (props.color === '#FFFFFF' && props.disabled ? '#2626267e' : '')};
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  border: ${(props) => (props.disabled && props.border ? '' : props.border)};
  height: 3vh;
  width: 8vw;
  min-height: 30px;
  min-width: 60px;
  max-height: 40px;
  max-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  :hover {
    background-color: ${(props) => (props.disabled ? '#DDDDDD' : props.hoverColor)};
  }
`