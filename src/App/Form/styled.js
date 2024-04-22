import styled from "styled-components";

export const StyledForm = styled.form`
      margin: auto;
`;

export const Header = styled.h1`
      text-transform: uppercase;
      color: ${({ theme }) => theme.color.black};
      background-color: ${({ theme }) => theme.color.pink};
`;

export const Text = styled.span`
      font-weight: bold;
      font-size: large;
      width: 150px;
      display: inline-block;
      margin-right: 10px;
      color: ${({ theme }) => theme.color.black};
`;

export const Field = styled.input`
      width: 400px;
      padding: 20px;
`;

export const Select = styled.select`
      width: 400px;
      padding: 20px;
`;

export const Button = styled.button`
      width: 60%;
      background-color: ${({ theme }) => theme.color.matterhorn};
      color: ${({ theme }) => theme.color.white};
      font-size: large;
      padding: 20px;
      margin-top: 40px;
      align-items: center;

      &:hover {
        background-color: ${({ theme }) => theme.color.pink};
      }
`;