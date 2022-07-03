import React from 'react'
import { checkTitle, checkPrice, checkColor } from './Utils';

export default function ListingItem(props) {
  const { item } = props

  if (!item?.MainImage?.url_570xN) return null;

  return (
    <div class="item">
    <div class="item-image">
      <a href={item.url}>
        <img src={item.MainImage.url_570xN} alt="itemImage"></img>
      </a>
    </div>
    <div class="item-details">
      <p class="item-title">{checkTitle(item.title)}</p>
      <p class="item-price">{checkPrice(item.price, item.currency_code)}</p>
      <p class={`item-quantity ${checkColor(item.quantity)}`}>{item.quantity}</p>
    </div>
  </div>
  )
}