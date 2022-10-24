import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined, ContactsOutlined, BellOutlined, ZhihuOutlined } from '@ant-design/icons'
import icon from '../assets/react-one.jpg'
import { isDisabled } from '@testing-library/user-event/dist/utils';
import styled from 'styled-components';
import { Nav, Navlink, Bars, NavBtn, NavBtnLink } from './NavbarElements.js'
import '../App.css'



const GridContainer = styled.div`
    display: grid;
    width: 100vw;
    height: 80px;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    
    h1 {
        margin-top: 30px;
        font-size: 30px;
        font-family: 'Josefin Sans', sans-serif;    
    }
`

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 8px;  
    justify-content: flex-start;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`


const Navbar = () => {
    return (
        <GridContainer>

            <ButtonContainer>
                <ZhihuOutlined style={{
                    fontSize: "55px",
                    boxShadow: "0 0 10px #fff",
                    marginBottom: "15px",
                    marginTop: "5px",
                    marginLeft: "15px",
                    backdropFilter: "blur(50px)",
                    paddingRight: "5px",
                    borderRadius: "5px"
                }} />

            </ButtonContainer>
            <TitleContainer>
                <h1>COSMATE</h1>
            </TitleContainer>

        </GridContainer>
    );
}

export default Navbar