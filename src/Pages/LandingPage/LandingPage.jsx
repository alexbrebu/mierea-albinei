import React from "react";
import {
  CTAContainer,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  LandingDownContainer,
  LandingSection,
  LandingUpContainer,
  LeftStoryContainer,
  MenuContainer,
  ProductContainer,
  ProductImageContainer,
  ProductNameContainer,
  ProductsContainer,
  RightStoryContainer,
  StoryContainer,
} from "./components";

import { BsChevronDown } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

export const LandingPage = () => {
  return (
    <LandingSection>
      <LandingUpContainer>
        <MenuContainer>
          <a>
            ABOUT US <BsChevronDown />
          </a>
          <a>PRODUSE</a>
          <a>LOCATII</a>
        </MenuContainer>
        <CTAContainer>
          <h3>Am Deschis!</h3>
          <span>Ti-e pofta de dulce?</span>
          <button>Comanda Acum</button>
        </CTAContainer>
      </LandingUpContainer>
      <StoryContainer>
        <LeftStoryContainer>
          <h3>Povestea Noastra ...</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            aspernatur molestias in harum nemo voluptas iste deleniti error
            quasi eveniet id necessitatibus, doloribus, veritatis reiciendis
            soluta, ullam quidem magni ad. Ratione nam dolor voluptas! Quod,
            veniam eligendi provident voluptate nulla ad commodi nobis
            cupiditate? Enim voluptas adipisci quo voluptate sed?
          </span>
        </LeftStoryContainer>
        <RightStoryContainer>
          <Image1
            src="https://images.unsplash.com/photo-1509024102370-fd7802f4a7a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
            alt=""
          />
          <Image2
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2955&q=80 "
            alt=""
          />
          <Image3
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
            alt=""
          />
          {/* <Image4
            src="https://images.unsplash.com/photo-1566121652444-41d39986a87a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972&q=80"
            alt=""
          /> */}
          <Image5
            src="https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2955&q=80"
            alt=""
          />
        </RightStoryContainer>
      </StoryContainer>
      <LandingDownContainer>
        <ProductsContainer>
          <ProductContainer>
            <ProductImageContainer>
              <img
                src="https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </ProductImageContainer>
            <ProductNameContainer>
              <h3>Lorem ipsum</h3>
            </ProductNameContainer>
            <button>Comanda</button>
          </ProductContainer>
          <ProductContainer>
            <ProductImageContainer>
              <img
                src="https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80"
                alt=""
              />
            </ProductImageContainer>
            <ProductNameContainer>
              <h3>Lorem ipsum</h3>
            </ProductNameContainer>
            <button>Comanda</button>
          </ProductContainer>
          <ProductContainer>
            <ProductImageContainer>
              <img
                src="https://images.unsplash.com/photo-1615735486329-c61cd40bfcc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
                alt=""
              />
            </ProductImageContainer>
            <ProductNameContainer>
              <h3>Lorem ipsum</h3>
            </ProductNameContainer>
            <button>Comanda</button>
          </ProductContainer>
        </ProductsContainer>
      </LandingDownContainer>
    </LandingSection>
  );
};
