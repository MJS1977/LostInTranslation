import { useHistory } from 'react-router-dom';

function Header() {

    const result = localStorage.getItem('username' || '');
    let history = useHistory();

    function handleClick(event) {
        event.preventDefault();
        history.push('/profile/');
    }

    return (

        <h5 onClick={handleClick}>{result}</h5>




    )
}

export default Header