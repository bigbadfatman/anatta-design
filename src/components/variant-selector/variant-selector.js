import React from 'react';
import './variant-selector.scss';
import Rating from 'components/rating';

const colorOptions = [
  {name: 'Red', hex: '#990000'},
  {name: 'Green', hex: '#009900'},
  {name: 'Blue', hex: '#000099'},
  {name: 'Yellow', hex: '#999900'},
  {name: 'Magenta', hex: '#990099'},
  {name: 'Cyan', hex: '#009999'}
];

const sizeOptions = Array(17).fill().map((_, index) => 5 + index / 2);

const unavailableSizeOptions = sizeOptions.filter(() => Math.random() > 0.5);

const genderOptions = ['MEN', 'WOMEN'];

const rating = Math.random() * 5;

const reviews = parseInt(100 + Math.random() * 100);

class VariantSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 0,
      size: sizeOptions.find(size => !unavailableSizeOptions.includes(size)),
      color: 0,
    }
  }

  setColor = (color) => {
    this.setState({
      color,
    })
  }

  setGender = (gender) => {
    this.setState({
      gender,
    })
  }

  setSize = (size) => {
    this.setState({
      size,
    })
  }

  render() {
    const {item} = this.props;
    return (
      <div className='selector-wrapper'>
        <div className='product-details'>
          <div className='name-price'>
            <p className='name'>
              {item.name}
            </p>
            <p className='price'>
              ${item.price}
            </p>
          </div>
          <div className='descriptions-ratings'>
            <p>
              {item.description}
            </p>
            <div>
              <Rating rating={rating} max={5} reviews={reviews}/>
            </div>
          </div>
        </div>
        <div className='gender-selector'>
          {
            genderOptions.map((gender, index) => (
              <div key={gender} onClick={() => this.setGender(index)} className={`gender-option ${index===this.state.gender && 'selected'}`}>{gender}</div>
            ))
          }
        </div>
        <div className='variant-area'>
          <div className='color-selector'>
            <div className='section-title'>SELECT COLOR</div>
            <div className='color-options'>
              {
                colorOptions.map((color, index) => (
                  <div key={color.hex} onClick={() => this.setColor(index)} className={`color-option ${this.state.color === index && 'selected'}`} style={{backgroundColor: color.hex}}>
                  </div>
                ))
              }
            </div>
          </div>
          <br/>
          <div className='size-selector'>
            <div className='section-title'>
              SELECT SIZE
              <div className='tip'>
                <p className='tip-content'>
                  Size guide content goes here
                </p>
                <p className='tip-title'>
                  Size & Fit Guide
                </p>
              </div>
            </div>
            <div className='size-options'>
              {
                sizeOptions.map((size, index) => (
                  <div key={size} onClick={() => !unavailableSizeOptions.includes(size) && this.setSize(size)} className={`size-option ${this.state.size === size && 'selected'} ${unavailableSizeOptions.includes(size) && 'unavilable'}`}>
                    {size}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='add-to-cart'>
          ADD TO BAG
        </div>
        <p className='shipping-message'>
          Worldwide Shipping + Free Returns
        </p>
      </div>
    )
  }
}

export default VariantSelector;
