import React from "react";
import styled from "styled-components";
import {
  OpensansBoldTundora16px,
  OpensansBoldTundora12px,
  OpensansNormalTundora14px,
  OpensansBoldTundora14px,
} from "../styledMixins";

export const BookingHeader = ({ address, carnivalLiberty, oct62022Oct8, price, text1, price2, total, iconTriangleDown }) => {
  return (
    <BookingHeader1>
      <HeaderText>
        <Address>{address}</Address>
        <CarnivalLiberty>{carnivalLiberty}</CarnivalLiberty>
        <Oct62022Oct8>{oct62022Oct8}</Oct62022Oct8>
      </HeaderText>
      <OverlapGroup2>
        <Total>
          <TotalContent>
            <OverlapGroup1>
              <X49948USD>
                <OverlapGroup>
                  <Price>{price}</Price>
                  <Text1>{text1}</Text1>
                  <Price1>{price2}</Price1>
                </OverlapGroup>
              </X49948USD>
              <Total1>{total}</Total1>
            </OverlapGroup1>
          </TotalContent>
          <IconTriangleDown src={iconTriangleDown} />
        </Total>
        <Border></Border>
      </OverlapGroup2>
    </BookingHeader1>
  );
}

const BookingHeader1 = styled.div`
  width: 375px;
  height: 81px;
  position: relative;
  background-color: var(--circle-custom-style);
  box-shadow: 0px 0px 4px #0000002e;
`;

const HeaderText = styled.div`
  position: absolute;
  width: 235px;
  height: 56px;
  top: 9px;
  left: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

const Address = styled.p`
  ${OpensansBoldTundora14px}
  margin-top: -1px;
  min-height: 14px;
  margin-left: -1px;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const CarnivalLiberty = styled.div`
  ${OpensansBoldTundora14px}
  min-height: 16px;
  margin-top: 4px;
  margin-left: -1px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Oct62022Oct8 = styled.p`
  ${OpensansNormalTundora14px}
  min-height: 14px;
  margin-top: 8px;
  margin-left: -1px;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 375px;
  height: 80px;
  top: 0;
  left: 0;
`;

const Total = styled.div`
  position: absolute;
  width: 85px;
  top: 0;
  left: 273px;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  align-items: center;
  min-height: 80px;
  background-color: var(--circle-custom-style);
`;

const TotalContent = styled.div`
  margin-top: 1px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 87px;
`;

const OverlapGroup1 = styled.div`
  width: 85px;
  height: 35px;
  position: relative;
`;

const X49948USD = styled.div`
  position: absolute;
  width: 85px;
  height: 22px;
  top: 13px;
  left: 0;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

const OverlapGroup = styled.div`
  width: 87px;
  height: 22px;
  position: relative;
`;

const Price = styled.div`
  ${OpensansBoldTundora12px}
  position: absolute;
  top: 5px;
  left: 60px;
  letter-spacing: 0;
  line-height: 17.2px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  ${OpensansBoldTundora16px}
  position: absolute;
  width: 55px;
  top: 0;
  left: 7px;
  letter-spacing: 0;
  line-height: 22.9px;
  white-space: nowrap;
`;

const Price1 = styled.div`
  ${OpensansBoldTundora12px}
  position: absolute;
  top: 2px;
  left: 0;
  letter-spacing: 0;
  line-height: 17.2px;
  white-space: nowrap;
`;

const Total1 = styled.div`
  ${OpensansBoldTundora14px}
  position: absolute;
  top: 0;
  left: 22px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const IconTriangleDown = styled.img`
  width: 13px;
  height: 8px;
  margin-top: 4px;
  margin-right: 2px;
`;

const Border = styled.div`
  position: absolute;
  width: 375px;
  height: 1px;
  top: 0;
  left: 0;
  background-color: var(--silver);
`;
