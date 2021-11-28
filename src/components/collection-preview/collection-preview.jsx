import React from 'react';
import './collection-preview.styles.scss';
import '../collection-item/collection-item';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherCollectionProps}) => (
              <CollectionItem key={id} {...otherCollectionProps}/>
            ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;