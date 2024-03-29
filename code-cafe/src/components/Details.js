/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Thumbnail from './Thumbnail';
import { itemImages } from '../items';
import './Details.css';
import ItemType from '../types/item';

function Details({ items }) {
  return (
    <div className="details-component">
      <Outlet />
      <div className="details-components-sidebar">
        {items.map((item) => (
          <Thumbnail
            key={item.itemId}
            image={itemImages[item.imageId]}
            title={item.title}
            itemId={item.itemId}
          />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Details;
