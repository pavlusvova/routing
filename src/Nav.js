import './App.css';

function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <li><a href='/count'>Counter</a></li>
            <li><a href='/shop'>Shop</a></li>
        </ul>
    </nav>
  );
}

export default Nav;
