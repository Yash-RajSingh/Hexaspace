import styled from "styled-components";

export const StatsContainer = styled.div`
  /* border: 2px solid green; */
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  width: 40%;
`;
export const StatsInfoWrapper = styled.div`
  /* border: 2px solid green; */
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;
export const Button1 = styled.button`
  /* clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%); */
  padding: 0.75rem 3rem 0.75rem 2rem;
  background: rgb(255, 81, 0);
  color: var(--white);
  cursor: pointer;
  font-family: "Joan";
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-size: 1.125rem;
  background: linear-gradient(
    198deg,
    rgba(255, 81, 0, 1) 51%,
    rgba(255, 58, 0, 1) 52%
  );
  &:hover {
    box-shadow: 2px 2px 10px black;
  }
  /* border-radius: 10px 250px 10px 10px; */
`;
export const Button2 = styled.button`
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 25% 100%); */
  padding: 0.75rem 2rem 0.75rem 3rem;
  /* width: 20rem; */
  background-color: transparent;
  color: var(--white);
  cursor: pointer;
  font-family: "Joan";
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-size: 1.125rem;
  border: 0.5px solid #ffffff65;
  margin-left: 3%;
  /* border-radius: 10px 10px 10px 250px; */
  &:hover {
    box-shadow: 2px 2px 10px black;
  }
`;

export const StatsInfoSubWrapper = styled.div`
  width: 25%;
  /* border: 1px solid white; */
`;
export const Count = styled.p`
  color: var(--white);
  font-size: 2.5rem;
  font-family: "Tilt Warp";
`;
export const CountLabel = styled.p`
  font-family: "Joan";
  color: var(--white);
  font-size: 1.5rem;
`;
