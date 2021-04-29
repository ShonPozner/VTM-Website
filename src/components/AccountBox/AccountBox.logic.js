import {useState, createContext, useEffect} from 'react'
import {expandingTransition } from './AccountBox.style';


const AccountBoxLogic = (props) => {
    const {initRegistered} = props;

    // use state if expanded the animation
    const [expandedAnimation, setExpandedAnimation] = useState(false);
    // use state if sing in or login
    const [isRegistered, setIsRegistered] = useState(true);
    
    useEffect(() => {
        playAnimation();
        setIsRegistered(initRegistered ? true: false)
    }, [initRegistered])

    // start the animation and affter done back to normal state (false)
    const playAnimation = () => {
        setExpandedAnimation(true);
        setTimeout(() => {
            setExpandedAnimation(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    // taggle to signin
    const swichToSignin = () => {
        playAnimation();
        setTimeout(() => {
            setIsRegistered(true);
        }, 500);
    };

    // taggle to singup
    const swichToSingUp = () => {
        playAnimation();
        setTimeout(() => {
            setIsRegistered(false);
        }, 500);
    };

    const constextValue = {swichToSignin, swichToSingUp}
    return {
        expandedAnimation,
        constextValue,
        isRegistered
    };

}

export const AccountContext = createContext()

export default AccountBoxLogic
