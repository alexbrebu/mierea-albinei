import styled from "styled-components";

export const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
`;

export const LandingUpContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url("https://cdn.shopify.com/s/files/1/0299/2861/t/7/assets/home-slider-slide-2.jpg?v=95446756719853192531554314692");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 64px;
  padding: 24px 24px 24px 48px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    font-family: "Lora", serif;
    color: var(--color-span);

    svg {
      color: var(--color-dark-gray);
      width: 16px;
      height: 16px;
    }
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 400px;
  height: 180px;
  /* gap: 24px; */
  background-color: white;
  border-radius: 6px;
  position: absolute;
  bottom: 24px;
  left: calc(50% - 200px);

  h3 {
    font-family: "Lora", serif;
    font-size: 18px;
    font-weight: 500;
  }

  span {
    font-family: "Lora", serif;
    font-size: 14px;
    font-weight: 300;
    color: rgb(68, 68, 68);
  }

  button {
    font-family: "Lora", serif;
    width: 100%;
    max-width: 120px;
    height: 40px;
    background-color: #444444;
    color: var(--color-white);
    font-size: 12px;
    font-weight: 500;
    border: none;
    border-radius: 2px;
    transition: 0.5s;
    cursor: pointer;

    :hover {
      background-color: #d442ba;
    }
  }
`;

export const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 256px 24px;
`;
export const LeftStoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 12px;
  padding: 24px;
  background-color: var(--color-white);
  transition: 1.5s;
  border-radius: 12px;

  :hover {
    transform: scale(1.1);
    border: 1px solid var(--color-light-gray);
    z-index: 10;
  }

  h3 {
    font-family: "Lora", serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  span {
    font-family: "Lora", serif;
    font-weight: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const RightStoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 600px;
  gap: 12px;
  position: relative;

  img {
    border-radius: 4px;
  }
`;

export const Image1 = styled.img`
  justify-self: end;
  width: 100%;
  max-width: 400px;
  height: 120px;
  object-fit: cover;
  padding-top: 20px;
`;
export const Image2 = styled.img`
  max-width: 400px;
  width: 100%;
  height: 160px;
  object-fit: cover;
`;
export const Image3 = styled.img`
  justify-self: start;
  width: 100%;
  max-width: 400px;
  height: 120px;
  object-fit: cover;
  padding-top: 20px;
`;

// export const Image4 = styled.img`
//   width: 100%;
//   max-width: 400px;
//   height: 200px;
//   object-fit: scale-down;
//   position: absolute;
//   top: -180px;
//   right: -50px;
//   rotate: 10deg;
// `;
export const Image5 = styled.img`
  max-width: 300px;
  height: 120px;
  object-fit: scale-down;
  position: absolute;
  bottom: -100px;
  left: 90px;
  /* rotate: -15deg; */
`;

export const LandingDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1000px;
  background-image: url("https://images.unsplash.com/photo-1612201143788-b15844da6606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1400px;
  gap: 32px;
  padding: 24px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 270px;

  padding: 12px 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: 0.6s;

  :hover {
    background: var(--color-white);

    transform: scale(1.2);
  }

  button {
    width: 100%;
    max-width: 120px;
    height: 48px;
    border: none;
    font-family: "Lora", serif;
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    background-color: #444444;
    color: var(--color-white);
    transition: 0.6s;

    :hover {
      background-color: var(--color-white);
      color: #444444;
      border: 1px solid #444444;
    }
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  width: 270px;
  height: 270px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    transition: 0.8s;
  }
`;

export const ProductNameContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  padding: 12px 24px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    font-family: "Lora", serif;
  }
`;
