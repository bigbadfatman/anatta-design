import React from 'react';
import CarouselTile from './carousel-tile/index';
import './carousel.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      dragStartPoint: 0,
    }
  }

  dragStart = (e) => {
    this.setState({
      dragStartPoint: e.changedTouches[0].clientX,
    })
  }

  dragEnd = (e) => {
    Math.abs(e.changedTouches[0].clientX - this.state.dragStartPoint) > 50 && this.changePage(e.changedTouches[0].clientX > this.state.dragStartPoint ? 'up' : 'down');
  }

  changePage = (direction = 'up') => {
    let {page} = this.state;
    if (direction === 'up') {
      page = (this.state.page >= Math.ceil(this.props.items.length / 4)) ? 1 : (page + 1);
    } else {
      page = (this.state.page === 1) ? Math.ceil(this.props.items.length / 4) : (page - 1);
    }
    this.setState({
      page,
    });
  }

  render() {
    return (
      !!(this.props.items && this.props.items.length) && (
        <div className='carousel-wrapper' onTouchStart={e => this.dragStart(e)} onTouchEnd={e => this.dragEnd(e)}>
          <div className='chevron left' onClick={() => this.changePage('down')}></div>
          <div className='chevron right' onClick={() => this.changePage('up')}></div>
          <p className='carousel-title'>{this.props.title}</p>
          <div className='carousel-tiles'>
            {
              this.props.items.map((tile, index) =>
                (index >= (this.state.page - 1) * 4 && index < (this.state.page) * 4) && (
                  <CarouselTile key={tile.id} item={tile}/>
                )
              )
            }
          </div>
        </div>
      )
    )
  }
}

export default Carousel;
