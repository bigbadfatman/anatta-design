import React from 'react';
import {PRODUCT_URL, PRODUCT_IMAGE_URL , getData} from 'helpers/api';
import Carousel from 'components/carousel';
import ProductDetails from 'components/product-details';
import { Route} from 'react-router-dom';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    getData(PRODUCT_URL).then(r => {
      this.setState({
        items: r,
      });
      r.forEach(item => {
        this.getProductImages(item.id);
      })
    });
  }

  getProductImages = (id) => {
    getData(PRODUCT_IMAGE_URL(id)).then(r => {
      const currentItem = this.state.items.find(item => item.id === id);
      currentItem['image_url'] = r[0].url;
      currentItem['url'] = `/${id}`;
      currentItem['tag'] = Math.random() > 0.7 && 'PRODUCT TAG';
      this.setState({
        items: this.state.items
      })
    })
  }

  render() {
    return (
      <>
        <Route path='/:id' exact component={ProductDetails}/>
        <Carousel title="You'll also like" items={this.state.items}/>
      </>
    )
  }
}

export default ProductPage;
