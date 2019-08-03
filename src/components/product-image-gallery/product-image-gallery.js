import React from 'react';
import './product-image-gallery.scss';
import {PRODUCT_IMAGE_URL , getData} from 'helpers/api';

class ProductImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
      images: [],
    }
  }

  componentDidMount() {
    this.getProductImages();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.itemId !== this.props.itemId) {
      this.getProductImages();
    }
  }

  getProductImages = () => {
    this.setState({
      images: [],
      selectedImage: 0,
    })
    getData(PRODUCT_IMAGE_URL(this.props.itemId)).then(images => {
      this.setState({
        images,
      })
    })
  }

  changeImage = (direction = 'up') => {
    let {selectedImage} = this.state;
    if (direction === 'up') {
      selectedImage = selectedImage === this.state.images.length - 1 ? 0 : selectedImage + 1;
    } else {
      selectedImage = selectedImage === 0 ? this.state.images.length - 1 : selectedImage - 1;
    }
    console.log(selectedImage);
    this.setImage(selectedImage);
  }

  setImage = (selectedImage) => {
    this.setState({
      selectedImage,
    })
  }

  render() {
    return(
      <div className='product-image-gallery-wrapper'>
        {
          (!!this.state.images.length && this.state.images[this.state.selectedImage].url)
          ? (
            <>
              <img src={this.state.images[this.state.selectedImage].url} alt="Product"/>
              <div className='controls'>
                <div onClick={() => this.changeImage('down')} className='chevron left'></div>
                {
                  this.state.images.map((image, index) => (
                    <img key={image.id} onClick={() => this.setImage(index)} className={`${index === this.state.selectedImage && 'selected'}`} src={image.url} alt={`Product ${index + 1}`}/>
                  ))
                }
                <div onClick={() => this.changeImage('up')} className='chevron right'></div>
              </div>
            </>
          ): (
            <div className='product-images-loading'>
              <p>
                Fetching Images
              </p>
            </div>
          )
        }
      </div>
    )
  }
}

export default ProductImageGallery;
