import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  //width: 33.3%;
  flex: 1;
  display: flex;
  align-items: center;
`
const Langguage = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px ;
  padding: 5px;

`
const Input = styled.input`
  border: none;
`
//---------------------------------------------------------------------//
const Center = styled.div`
  //width: 33.3%;
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`
//---------------------------------------------------------------------//
const Right = styled.div`
  //width: 33.3%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langguage>EN</Langguage>
          <SearchContainer>
            <Input />
            <SearchIcon style = {{color:"gray" , fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BILLY</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
