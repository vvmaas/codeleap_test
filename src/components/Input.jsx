import styled from 'styled-components';

export default function Input({ variant = 'outlined', value='', onChange = () => 0 }) {
  return  (
    <input value={value} onChange={onChange} variant={variant} />
  );
}