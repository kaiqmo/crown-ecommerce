import styled,{ css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const inverterButtonStyles = css`
    background-color: white;
    color:black;
    border: 1px solid black;

    &:hover{
        background-color: black;
        color: white;
        border: none;
    }
`;

const collectionItem = css`

    width: 80%;
    opacity: 0.7;
    position: absolute;
    display: none;
    background-color: white;
    color:black;
    border: 1px solid black;
    &:hover{
        background-color: black;
        color: white;
        border: none;
        display:flex;
    }
`;
const googleSignInStyles = css`
    background-color:#4285f4;
    color:white;

    &:hover{
        background-color: #357ae8;
        border: none;
    }
    
    @media(max-width:500px){
        min-width:125px;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }
    // if(props.collectionInverted){
    //     return collectionItem;
    // }
    return props.inverted ? inverterButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 5px;
        
    @media(max-width:400px){
        width: 125px !important;
        min-width: 100px;
        padding:0;
        letter-spacing: 2.5px;
    }
    
    ${getButtonStyles}
`;