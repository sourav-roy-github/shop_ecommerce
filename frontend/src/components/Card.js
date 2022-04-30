const Square = (props) => {
  var squareStyle = {
    height: props.height,
    backgroundColor: props.backgroundColor,
    color: props.color,
    'text-align': 'center',
    'font-size': props.font,
  }

  return (
    <a href={props.path}>
      <img style={squareStyle} src={props.img}></img>
    </a>
  )
}

const namestyle = {
  color: 'black',
  font: '25px',
  'text-align': 'center',
  'font-size': '35px',
}
const pricestyle = {
  color: 'black',
  font: '20px',
  'text-align': 'center',
  'font-size': '25px',
}

const Label = (props) => {
  var labelStyle = {
    fontFamily: 'sans-serif',
    fontWeight: props.fontWeight,
    padding: 10,
    margin: 0,
    color: props.fcolor,
    'text-align': props.align,
    height: props.height,
  }

  return (
    <div>
      <div style={namestyle}>{props.name}</div>
      <div style={pricestyle}>{props.price}</div>
    </div>
  )
}

const Card = (props) => {
  var cardStyle = {
    height: props.cardHeight,
    width: props.cardWidth,
    opacity: props.opacity,
    left: props.left,
    right: props.right,
    padding: 5,
    backgroundColor: '#FFF',
    WebkitFilter: 'drop-shadow(0px 0px 5px #666)',
    filter: 'drop-shadow(0px 0px 5px #666)',
    'text-align': 'center',
  }

  return (
    <div style={cardStyle}>
      <Square {...props} />
      <Label {...props} />
    </div>
  )
}

export default Card
