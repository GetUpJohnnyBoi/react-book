/* eslint-disable import/no-extraneous-dependencies */
import { useParams } from 'react-router-dom';
import './DetailItem.css';

function DetailItem() {
  const { id } = useParams();
  return (
    <div className="detail-item-component">
      {id}
    </div>
  );
}

export default DetailItem;
