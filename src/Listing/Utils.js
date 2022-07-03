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

function checkColor(quantity) {
    let colorClass = null;
  if(quantity <= 10) {
    colorClass = 'level-low'
  }
  if(quantity > 10 && quantity <= 20) {
    colorClass = 'level-medium'
  }
  if(quantity > 20) {
    colorClass = 'level-high'
  }
  return colorClass;
}

export { checkTitle, checkPrice, checkColor }