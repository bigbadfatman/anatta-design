import React from 'react';
import {PRODUCT_DETAILS_URL, getData} from 'helpers/api';
import VariantSelector from 'components/variant-selector';
import ProductImageGallery from 'components/product-image-gallery';
import './product-details.scss';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: {},
    }
  }

  componentDidMount() {
    this.getProductDetails();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.id !== this.props.match.params.id) {
      this.getProductDetails();
    }
  }

  getProductDetails = () => {
    this.setState({
      itemDetails: {}
    },() => getData(PRODUCT_DETAILS_URL(this.props.match.params.id)).then(r => {
      this.setState({
        itemDetails: r,
      });
    }))
  }

  render() {
    return (
      <div className='product-details-wrapper'>
        {
          this.state.itemDetails.id
          ? (
            <>
              <ProductImageGallery itemId={this.props.match.params.id}/>
              <VariantSelector item={this.state.itemDetails}/>
            </>
          )
          : (
            <div className='product-info-loading'>
              <p>
                Fetching Product Information
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductDetails;
