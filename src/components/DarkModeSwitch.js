import React from 'react'
import { useDarkMode } from '../utils/hooks/useDarkMode';


const DarkModeSwitch = () => {
    const [darkMode, setDarkMode, toggleMode] = useDarkMode('darkModeSelect', {
        darkMode: false
    });
    const [state, setState] = React.useState({
        checkedA: darkMode,
        checkedB: !darkMode,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    return (
        <div className='darkModeDiv'>
            <div
                onClick={toggleMode}
                name='darkModeSelect'
                className={darkMode ? 'toggle toggled ' : 'toggle'}
            ><span class="tooltiptext">Toggle Dark Mode</span></div>
        </div>
    )
}

export default DarkModeSwitch;