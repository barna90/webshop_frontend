import React, { Component } from "react";
import { CirclePicker } from "react-color";
import SizeGuide from "../SizeGuide/SizeGuide";
import preDefinedColors from "../../style/colors";

// TODO test 5-6 kepnel
class ProductDescription extends Component {
  state = {};

  // TODO commons
  getKeyByValue = (object, value) =>
    Object.keys(object).find(
      key => object[key].toUpperCase() === value.toUpperCase()
    );

  // TODO path to commons
  hexFromColorNames = colors => colors.map(color => preDefinedColors[color]);

  // TODO path to commons
  renderImagesForProductGallery = images => {
    return images.map(image => {
      return (
        <div className="item">
          <a
            href={require("../../assets/images/productimages/" +
              image.fileName)}
          >
            <img
              src={require("../../assets/images/productimages/" +
                image.fileName)}
              alt=""
            />
          </a>
        </div>
      );
    });
  };

  renderImagesForProductVariants = images => {
    return images.map(image => {
      return (
        <div className="item">
          <img
            src={require("../../assets/images/productimages/" + image.fileName)}
            alt=""
          />
        </div>
      );
    });
  };

  filterImagesBySelectedColor = selectedColor => {
    const { image } = this.props;
    const selectedColorName = this.getKeyByValue(
      preDefinedColors,
      selectedColor
    );
    return image.filter(img => img.tags.indexOf(selectedColorName) > -1);
  };

  renderSizes = () => {
    const { sizes, selectedColor, selectedSize, selectSize } = this.props;
    const selectedColorName = this.getKeyByValue(
      preDefinedColors,
      selectedColor
    );
    return sizes[selectedColorName].map(size => {
      return (
        <div
          className={
            "ps-variant ps-variant--size " +
            (selectedSize === size ? "active" : "")
          }
          onClick={() => (selectedSize !== size ? selectSize(size) : false)}
        >
          <span className="ps-variant__tooltip">{size}</span>
          <span className="ps-variant__size">{size}</span>
        </div>
      );
    });
  };

  render() {
    const {
      id,
      name,
      price,
      handleOnAddToCartClick,
      colors,
      selectedColor,
      handleColorChangeComplete
    } = this.props;

    return (
      <div className="container">
        <div className="ps-product--detail">
          <div className="ps-product__header">
            <div className="ps-product__thumbnail" data-vertical="true">
              <figure>
                <div className="ps-wrapper">
                  <div className="ps-product__gallery" data-arrow="true">
                    {this.renderImagesForProductGallery(
                      this.filterImagesBySelectedColor(selectedColor)
                    )}
                  </div>
                  {/* <div className="ps-product__video ps-video"><a className="ps-btn ps-btn--outline ps-btn--black" href="https://www.youtube.com/watch?v=TlC18jAQgVw"><i className="pe-7s-play"></i> View Video</a></div> */}
                </div>
              </figure>
              <div
                className="ps-product__variants"
                data-item="4"
                data-md="3"
                data-sm="3"
                data-arrow="false"
              >
                {this.renderImagesForProductVariants(
                  this.filterImagesBySelectedColor(selectedColor)
                )}
              </div>
            </div>
            <div className="ps-product__info">
              <h1>{name}</h1>
              <h4 className="ps-product__price">{price} Ft</h4>
              <div className="ps-product__desc">
                <p>
                  Go sporty this summer with this vintage navy and white striped
                  v-neck t-shirt from the Nike. Perfect for pairing with denim
                  and white kicks for a stylish sporty vibe.
                </p>
              </div>
              <div className="ps-product__desc">
                <p>
                  Go sporty this summer with this vintage navy and white striped
                  v-neck t-shirt from the Nike. Perfect for pairing with denim
                  and white kicks for a stylish sporty vibe.
                </p>
              </div>
              <div className="ps-product__variations">
                <figure>
                  <figcaption>Color</figcaption>
                  <CirclePicker
                    color={selectedColor}
                    colors={this.hexFromColorNames(colors)}
                    circleSize={26}
                    circleSpacing={18}
                    onChangeComplete={handleColorChangeComplete}
                  />
                </figure>
                <figure>
                  <figcaption>Size</figcaption>
                  {this.renderSizes()}
                </figure>
              </div>
              <div className="ps-product__shopping">
                <div className="form-group--number">
                  <button className="up">
                    <i className="fa fa-plus"></i>
                  </button>
                  <button className="down">
                    <i className="fa fa-minus"></i>
                  </button>
                  <input className="form-control" type="text" placeholder="1" />
                </div>
                <a
                  className="ps-btn"
                  href="#"
                  onClick={e => handleOnAddToCartClick(e, id)}
                >
                  Add to cart
                </a>
                <a className="ps-product__favorite" href="#">
                  <i className="fa fa-heart-o"></i>
                </a>
              </div>
              <div className="ps-product__links">
                <a className="ps-modal-link" href="#">
                  Size Guide
                </a>
                <a className="ps-modal-link" href="#">
                  Delivery & Return
                </a>
              </div>
              <div className="ps-product__specification">
                <p>
                  <strong>Categories:</strong>
                  <a href="shop-4-column.html">Women</a>,
                  <a href="shop-4-column.html"> Top</a>,
                  <a href="shop-4-column.html"> Accessories</a>,
                  <a href="shop-4-column.html"> Jewellery</a>
                </p>
                <p>
                  <strong>Tags:</strong>
                  <a href="shop-4-column.html">Dress</a>,
                  <a href="shop-4-column.html"> Top</a>,
                  <a href="shop-4-column.html"> Women</a>
                </p>
              </div>
              <div className="ps-product__sharing">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ps-product__content ps-tab-root">
            <ul className="ps-tab-list">
              <li className="active">
                <a href="#tab-1">Description</a>
              </li>
              <li>
                <a href="#tab-2">Addition Information</a>
              </li>
              <li>
                <a href="#tab-3">Review (0)</a>
              </li>
            </ul>
            <div className="ps-tabs">
              <div className="ps-tab active" role="tabpanel" id="tab-1">
                <p>
                  Go sporty this summer with this vintage navy and white striped
                  v-neck t-shirt from the Abercrombie & Fitch. Perfect for
                  pairing with denim and white kicks for a stylish sporty vibe.
                  Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!
                </p>
                <p>
                  Typography is the work of typesetters, compositors,
                  typographers, graphic designers, art directors, manga artists,
                  comic book artists, graffiti artists, and now—anyone who
                  arranges words, letters, numbers, and symbols for publication,
                  display, or distribution—from clerical workers and newsletter
                  writers to anyone self-publishing materials.
                </p>
                <SizeGuide />
                <img
                  src={require("../../assets/img/product-detail/watch.jpg")}
                  alt=""
                />
              </div>
              <div className="ps-tab" id="tab-2">
                <div className="table-responsive">
                  <table className="table ps-table">
                    <tbody>
                      <tr>
                        <td>Brand</td>
                        <td>H&M, Mango, Nike, Zara</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>Black, Brown, White</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="ps-tab" id="tab-3">
                <div className="ps-block--comment ps-block--comment-review">
                  <div className="ps-block__thumbnail">
                    <img src={require("../../assets/img/user/3.jpg")} alt="" />
                  </div>
                  <div className="ps-block__content">
                    <h5>Martin Bailey</h5>
                    <select className="ps-rating">
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                    </select>
                    <p>
                      Aenean sit amet odio est. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Mauris quis est lobortis odio dignissim rutrum.
                      Pellentesque blandit lacinia diam, a tincidunt felis
                      tempus eget.
                    </p>
                  </div>
                </div>
                <div className="ps-block--comment ps-block--comment-review">
                  <div className="ps-block__thumbnail">
                    <img src={require("../../assets/img/user/1.jpg")} alt="" />
                  </div>
                  <div className="ps-block__content">
                    <h5>San Baleik</h5>
                    <select className="ps-rating">
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="2">5</option>
                    </select>
                    <p>
                      Aenean sit amet odio est. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Mauris quis est lobortis odio dignissim rutrum.
                      Pellentesque blandit lacinia diam, a tincidunt felis
                      tempus eget.
                    </p>
                  </div>
                </div>
                <form
                  className="ps-form--product-review"
                  action="do_action"
                  method="post"
                >
                  <h4>BE THE FIRST TO REVIEW “ANALOGUE RESIN STRAP WATCH”</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="form-group">
                    <label>Your rating</label>
                    <select className="ps-rating">
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Review:</label>
                    <textarea className="form-control" rows="6"></textarea>
                  </div>
                  <div className="form-group">
                    <label>
                      Name:<sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Email:<sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <button className="ps-btn ps-btn--outline ps-btn--black">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDescription;
