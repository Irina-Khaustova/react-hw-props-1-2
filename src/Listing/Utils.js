function checkTitle(str) {
  let titleStr = str;
  if(str.length > 50) {
    titleStr = `${str.slice(0,51)}...`;
  }
  return titleStr;
}

function checkPrice(price, code) {
  let priceView = `${code} ${price}`;
  if(code === "USD") {
    priceView = `$${price}`;
  } 
  else if(code === "EUR") {
    priceView = `€${price}`;   
  }
  return priceView;
}

function checkColor(quantity1) {
    let colorClass = null;
  if(quantity1 <= 10) {
    colorClass = 'level-low'
  }
  if(quantity1 > 10 && quantity1 <= 20) {
    colorClass = 'level-medium'
  }
  if(quantity1 > 20) {
    colorClass = 'level-high'
  }
  return colorClass;
}

export { checkTitle, checkPrice, checkColor }