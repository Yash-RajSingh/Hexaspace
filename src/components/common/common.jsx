import styled from "styled-components";

export const Button = styled.button`
  box-shadow: none;
  background: ${(props) =>
    props.color ? "var(--light-orange)" : "transparent"};
  color: var(--white);
  width: ${(props) => (props.size ? props.size : "100%")};
  border-color: ${(props) =>
    props.color ? "#ffffff6a" : "var(--light-orange)"};
  padding: 0.375rem 0.75rem;
  text-align: center;
  position: relative;
  outline: none;
  margin-top: ${(props) => props.top};
  white-space: normal;
  text-decoration: none;
  border-radius: 0.188rem;
  cursor: pointer;
  font-family: "Joan";
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-size: 1.125rem;
  &:hover {
    background: var(--dark-orange);
    border-color: var(--white);
  }
  transition: all 400ms;
`;


export const Spacer = styled.div`
  margin-top: ${(props) => props.top};
`;