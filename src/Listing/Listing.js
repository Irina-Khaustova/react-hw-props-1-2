import React from 'react'
import ListingItem from './ListingItem'
import PropTypes from 'prop-types'

export default function Listing(props) {
  const { items } = props
  console.log(props)
  return (
    <div className="item-list">
         {items.map((item, i) => (
          <ListingItem key ={i} item={item}>
          </ListingItem>
           ))
  }
        </div>
  )
}

Listing.defaultProps = {
  items: []
  }

Listing.propTypes = {
  count: PropTypes.array
}