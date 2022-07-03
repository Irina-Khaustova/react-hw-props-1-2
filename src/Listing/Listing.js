import React from 'react'
import ListingItem from './ListingItem'
import PropTypes from 'prop-types'

export default function Listing(props) {
  const { list } = props
  console.log(props)
  return (
    <div className="item-list">
         {list.map((item, i) => (
          <ListingItem key ={i} item={item}>
          </ListingItem>
           ))
  }
        </div>
  )
}

Listing.defaultProps = {
    list: []
  }

Listing.propTypes = {
  count: PropTypes.array
}