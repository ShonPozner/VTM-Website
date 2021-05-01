import styled, {css} from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

// NavbarSection style - color border display.. 
export const NavbarSection = styled.nav`
    justify-content: center;
    align-items: center;
    height: 65px;
    width:100%;
    display: flex;
    box-shadow: #fff;
   
    ${({useTransparent}) => useTransparent && css`
        background-color: transparent;
        border-bottom: none;
    `}
`;

// Nav Logo Container style - cursor and postion
export const NavLogoContainer = styled.div`
    cursor: pointer;
    justify-self: start;
    margin-left: 20px;
    
    @media screen and (max-width: 750px) {
        position: absolute;
        top: -6px;
        left: 0;
        transform: translate(25%, 50%);
    }
`;


export const NavMenu = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    font-size: 30px;
    
    @media (max-width: 750px) {
        display: block;
        position: absolute;
        top: -18px;
        left: 40px;
        transform: translate(-100%, 60%);
        font-size: 30px;
        cursor: pointer;
        color: ${({useTransparent}) => useTransparent? '#dfdce2': 'black'};

    };
`

export const NavLeftList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: ${({width}) => width? width : '70vw'};
    justify-content: ${({position}) => position? 'position': 'start'};
    margin-right: 2rem;
    font-size: 30px;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* height: 90vh; */
        position: absolute;
        top: 65px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;

        ${({active}) => active && css`
            /* background: #eee; */
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
        `};
    };
`;






export const NavItem = styled.li`
    text-align: center;
    padding: 0px 5px;
    width: 100%;
    display: table;
    cursor: pointer;
`;

// link style
export const NavLink = styled(Link)`

    /* border-bottom: 2px solid #2C7CD4; */


    color: ${({useTransparent}) => useTransparent? '#efefef': 'black'};
    font-size: 20px;
    display: flex;
    text-decoration: none;
    cursor: pointer;
    margin: 4px 0px 0px 10px;
    transition: all 200ms ease-in-out;


    &:hover {
        filter: contrast(0.6);
        border-bottom: 2px solid #2C7CD4;

        /* background-color: #FFFFFF; */
        opacity: 0.3;
        /* border-radius: 22px; */
        transition: all 0.2s ease-out;
    };

    @media screen and (max-width: 750px) {
        /* color: red; */
        &:hover {
            background: none;
            border-bottom: none;

        }
    };
    
`;


export const NavRightList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 5px;
    list-style: none;
    text-align: center;
    width: ${({width}) => width? width : '80vw'};
    justify-content: ${({position}) => position? 'position': 'start'};
    margin-right: 2rem;
    font-size: 27px;
    color: black;

    @media screen and (max-width: 750px) {
        position: absolute;
        right: 0;

    };
`;
