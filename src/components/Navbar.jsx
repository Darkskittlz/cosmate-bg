import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined, ContactsOutlined, BellOutlined } from '@ant-design/icons'
import icon from '../assets/react-one.jpg'
import { isDisabled } from '@testing-library/user-event/dist/utils';
import styled from 'styled-components';


const NavContainer = styled.div`
    background-color: black;
    width: 100%;
`

const Navbar = () => {
    return (
        <NavContainer>
            <h1>Navbar</h1>
        </NavContainer>
    );
}

export default Navbar