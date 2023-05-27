import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* border: 1px solid white; */
  margin-top: 0.35rem;
`;

export const HeaderWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Headermage = styled.img`
  width: 2.5rem;
`;
export const HeaderTitle = styled.h1`
  color: var(--light-orange);
  font-size: 2.5rem;
  font-family: "Joan";
  letter-spacing: 1px;
`;

export const SubHeaderContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  width: 33%;
  /* border: 1px solid white; */
`;
export const NavButton = styled.p`
  font-family: "Joan";
  color: white;
  padding: 0.375rem 0.75rem;
  width: 7rem;
  text-align: center;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-size: 1.125rem;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  display: inline-block;
  &::before {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0px;
    width: 100%;
    height: 2px;
    background: var(--light-orange);
    display: block;
    -webkit-transform-origin: right top;
    -ms-transform-origin: right top;
    transform-origin: right top;
    -webkit-transform: scale(0, 1);
    -ms-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
    transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
  }

  &:hover::before {
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
  }
`;

export const ProfileImage = styled.img`
  width: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const HeaderProfileContainer = styled.div`
  /* border: 1px solid white; */
  text-align: right;
`;
export const PopupBody = styled.div`
  background: var(--white);
  padding: 0.25rem;
  margin-top: 0.7rem;
  position: absolute;
  right: 2%;
  z-index: 2;
`;
export const ArrowUp = styled.div`
  min-width: 2px;
  max-width: 1.5rem;
  min-height: 10px;
  margin-top: -9px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: var(--white);
  margin-left: auto;
  margin-right: 15%;
`;
export const PopupOptions = styled.p`
  padding: 0.5rem 1rem;
  text-align: left;
  color: #6e6e6ed0;
  /* color: var(--light-orange); */
  font-family: "Joan";
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 500ms;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #cbcbcbd0;
  }
`;

export const PopUp = styled.div`
  z-index: 2;
`;
