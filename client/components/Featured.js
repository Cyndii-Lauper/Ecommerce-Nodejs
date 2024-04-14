import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";

export default function Featured() {
  const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
  `;
  const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  `;
  const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
  `;
  const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    img {
      max-width: 100%;
      max-height: 200px;
      display: block;
      margin: 0 auto;
    }
    div:nth-child(1) {
      order: 2;
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: 1.1fr 0.9fr;
      div:nth-child(1) {
        order: 0;
      }
      img {
        max-width: 100%;
      }
    }
  `;
  const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
  `;
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
    img {
      max-width: 100%;
    }
  `;

  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Featured Product</Title>
              <Desc>Find the best product for you</Desc>
              <Button>Shop Now</Button>
              <Button size ="l">Add to cart</Button>
            </div>
          </Column>
          <Column>
            <img
              src="https://minh-next-ecommerce.s3.amazonaws.com/1713061231613.jpg"
              alt="Featured Product"
            />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
