
function Header() {

    const result = localStorage.getItem('username' || '');

    return (

        <h5>{result}</h5>




    )
}

export default Header