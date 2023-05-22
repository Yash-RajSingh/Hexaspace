import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 15%;
  backdrop-filter: blur(300px);
  background-color: #111111b8;
`;

export const FooterWrapper = styled.p`
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0 0.5rem;
`

export const FooterLogo = styled.img`
  width: 3rem;
`
export const FooterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FooterHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
`

export const FooterTitle = styled.p`
  color: var(--light-orange);
  font-size: 2.5rem;
  font-family: "Joan";
  letter-spacing: 1px;
`;

export const FooterHeader = styled.p`
  color: var(--white);
  font-size: 1.5rem;
  line-height: 1.5;
  font-family: 'Joan';
  white-space: nowrap;
`;

export const Input = styled.input`
  width: ${(props) => (props.size ? props.size : "100%")};
  background: rgba(122, 54, 33, 0.5);
  border: 0.5px solid #ffffff6a;
  backdrop-filter: blur(50px);
  line-height: 1.5;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  color: var(--white);
  border-radius: 0.24rem;
`;

export const FooterBottom = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
`

export const FooterSubBottom = styled.div`
  /* border: 1px solid yellow; */
  width: 30%;
`

export const Description = styled.p`
  color: grey;
  font-size: 1.25rem;
  font-family: 'Joan';
  margin-top: 2%;
  line-height: 1.5;
`

export const Copyright = styled.p`
  color: var(--white);
  font-size: 1.125rem;
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
  margin-top: 3%;
`