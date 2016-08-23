import React from 'react';
import {Link} from 'react-router';


class Roll extends React.Component {
  render() {
    return (
      <div id="caroucel">
        <div id="myCarousel" className="carousel slide">
          <div id="my">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img src="" alt="First slide"/>
              </div>
              <div className="item">
                <img src="" alt="Second slide"/>
              </div>
              <div className="item">
                <img src="" alt="Third slide"/>
              </div>
            </div>

            <a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
            <a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
          </div>
        </div>
      </div>
    )
  }
}
class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <ul className="nav nav-tabs">
          <li className="dropdown">
            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
              分类<span className="caret"></span>
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="#">服装</Link></li>
              <li><Link to="#">潮鞋</Link></li>
              <li><Link to="#">手表</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
              价格<span className="caret"></span>
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="#">100-200</Link></li>
              <li><Link to="#">200-300</Link></li>
              <li><Link to="#">300以上</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
              性别<span className="caret"></span>
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="#">男性</Link></li>
              <li><Link to="#">女性</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown">
              人气<span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li><Link to="#">价格由高到低</Link></li>
              <li><Link to="#">销量由高到底</Link></li>
              <li><Link to="#">综合排序</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

class Like extends React.Component {
  render() {
    return (
      <div id="pictures">
        <div className="one">
          <img className="love" src="./images/show8.jpg"/>
        </div>
        <div className="one">
          <img className="love" src="./images/show7.jpg"/>
        </div>
        <div className="one">
          <img className="love" src="./images/show2.jpg"/>
        </div>
        <div className="one">
          <img className="love" src="./images/show1.jpg"/>
        </div>
        <div className="one">
          <img className="love" src="./images/show5.jpg"/>
        </div>
        <div className="one">
          <img className="love" src="./images/show4.jpg"/>
        </div>
      </div>
    )
  }
}

class Recommendation extends React.Component {
  render() {
    return (
      <div>
        <Roll/>
        <Menu/>
        <Like/>
      </div>
    )
  }
}
export default Recommendation


