import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 3rem;
      height: 3rem;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: 0.4s ease;

      :hover {
        border-bottom: 3px solid ${(props) => props.theme.icon};
      }

      &.active {
        color: ${(props) => props.theme.icon};
      }
    }

    input {
      opacity: 0;
      position: absolute;
      height: 2rem;
      width: 4rem;
      z-index: 1;

      :checked + label div {
        transform: translateX(2rem);
      }
    }

    label {
      background-color: ${(props) => props.theme.switch};
      color: ${(props) => props.theme.icon};

      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 0;

      border-radius: 50px;
      height: 2rem;
      width: 4rem;
      padding: 0.5rem;

      i {
        height: 20px;
      }

      div {
        background-color: ${(props) => props.theme.icon};
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        top: 0.25rem;
        left: 0.25rem;
        border-radius: 50%;
        transition: transform 0.1s linear;
      }
    }
  }
`
