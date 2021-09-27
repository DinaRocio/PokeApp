import styled from "@emotion/styled";

export const ModalBackground = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  animation: fadein 0.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const ModalContent = styled.div`
  padding: 20px;
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
  border-radius: 0px 0px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const LogoModal = styled.img`
  width: 138px;
`;

export const ModalOptions = styled.ul`
  display: flex;
  flex-direction: inherit;
  list-style-type: none;
  gap: 16px;
  h3 {
    font-size: 27px;
    line-height: 32px;
    text-align: center;
    color: #000000;
    text-shadow: 4px 4px 20px rgba(1, 28, 64, 0.2);
  }
`;
