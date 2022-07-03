import React from "react";
import Star from "./Star";
import PropTypes from 'prop-types'

export default function Stars(props) {
  const { count } = props;
  const countNumber = Number(count);
  const stars = [];
  for(let i = 0; i < countNumber; i += 1) {
    stars.push(i)
  }

  if(countNumber < 1 || countNumber > 5 || countNumber.isNan) {
    return null 
  }
  return (
    <ul className="card-body-stars u-clearfix">
        {stars.map((star, i) => (
          <li>
          <Star key ={`stars${i}`} >
          </Star>
          </li>
        ))
        }
    </ul>
)
    }

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number
}
