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
  color: ${(props) => (props.disabled ? '#2a2a2a7d' : '#FFFFFF')};
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  height: 3vh;
  width: 5vw;
  min-height: 30px;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
`