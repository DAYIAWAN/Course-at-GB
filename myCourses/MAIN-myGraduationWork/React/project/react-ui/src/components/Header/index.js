import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import headerLogo from '../../img/header-logo.png';
import NavbarMain from '../NavbarMain';
import { searchProducts } from '../../actions/actionCreators';
import { cartItemsSelector } from '../../selectors';

const Header = () => {
  const dispatch = useDispatch();
  const { cartItemsCount } = useSelector(cartItemsSelector);
  const history = useHistory();
  const handleCartClick = () => history.push('/cart');
  const [searchInvisible, setSearchInvisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    if (!inputValue) {
      setSearchInvisible((prevState) => !prevState);
      return;
    }
    dispatch(searchProducts(inputValue));
    setInputValue('');
    setSearchInvisible(true);
    history.push('/catalog');
  };

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </NavLink>

            <div className="collapase navbar-collapse" id="navbarMain">
              <NavbarMain />
              <div>
                <div className="header-controls-pics">
                  <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                    onClick={handleSearchClick}
                  />
                  {/* Do programmatic navigation on click to /cart */}
                  <div
                    className="header-controls-pic header-controls-cart"
                    onClick={handleCartClick}
                  >
                    {cartItemsCount ? (
                      <div className="header-controls-cart-full">
                        {cartItemsCount}
                      </div>
                    ) : null}
                    <div className="header-controls-cart-menu" />
                  </div>
                </div>
                <form
                  data-id="search-form"
                  className={clsx(
                    'header-controls-search-form',
                    'form-inline',
                    searchInvisible && 'invisible',
                  )}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className="form-control"
                    placeholder="Поиск"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
