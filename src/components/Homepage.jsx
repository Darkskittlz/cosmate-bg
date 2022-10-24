import React, { useEffect } from 'react'
import homeElement from '../constants/homeElement.js'
import '../App.css'
import styled from 'styled-components';



const InnerContainer = styled.div`
    width: 500px;
    padding: 10px;
    height: 500px;
    display: flex;
    margin-left: 20%;
    margin-top: 15%;
    justify-content: flex-start;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 2px solid white;
    flex-direction: column;
    
    h1 {
        margin-top: 20px;
        color: white;
        font-size: 50px;
        text-align: center;
    }

    p {
        font-family: 'notMyType';
        color: white;
        text-align: center;
    }
`


const Homepage = () => {


    return (
        <InnerContainer>
            <h1>Cosmate Frontend</h1>
            <p>Sample text, blah blah blah</p>
        </InnerContainer>
    )
};

export default Homepage