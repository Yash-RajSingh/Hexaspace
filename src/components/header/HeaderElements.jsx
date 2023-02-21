import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* border: 1px solid white; */
  margin-top: 0.35rem;
`

export const HeaderWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Headermage = styled.img`
  width: 2.5rem;
`
export const HeaderTitle = styled.h1`
  color: var(--light-orange);
  font-size: 2.5rem;
  font-family: 'Joan';
  letter-spacing: 1px;
`

export const SubHeaderContainer = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: ${props => props.gap};
  width: 33%;
  /* border: 1px solid white; */
`
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
  width: 3rem;
`