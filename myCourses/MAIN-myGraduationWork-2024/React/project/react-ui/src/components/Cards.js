import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers/index';
import Loader from './Loader';
import Message from './Message';

const Cards = ({
  items, isCatalog, loading, error,
}) => (
  <>
    <div className="row">
      {
            items.map((item) => (
              <div key={item.id} className={clsx('col-4', isCatalog && 'catalog-item-card-wrapper')}>
                <div className={clsx('card', isCatalog && 'catalog-item-card')}>
                  <img
                    src={item.images[0]}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />

                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{formatPrice(item.price)}</p>
                    <Link to={`catalog/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
                  </div>
                </div>
              </div>
            ))
          }
    </div>
    <Message type="error" message={error} />
    <Loader loading={loading} />
  </>
);

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      images: PropTypes.arrayOf(
        PropTypes.string,
      ),
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
  isCatalog: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.oneOf([PropTypes.string, null]),
};

Cards.defaultProps = {
  isCatalog: false,
  loading: false,
  error: null,
};

export default Cards;
