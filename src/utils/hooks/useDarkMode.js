import { useLocalStorage } from './useLocalStorage';


export const useDarkMode = (key) => {
    const [values, setValues] = useLocalStorage(key);

    const toggleMode = e => {
        e.preventDefault();
        setValues(!values);
        if (values === false) {
            window.document.body.classList.add('dark-mode')
            if (window.document.body.classList.contains('dark-mode')) {
                window.document.body.classList.remove('App-header')
            } else {
                window.document.body.classList.add('App-header')
            }
        } else {
            window.document.body.classList.remove('dark-mode')
            window.document.body.classList.add('App-header')
        }
    };

    return [values, setValues, toggleMode];
}