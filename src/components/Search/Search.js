import React, { Component } from "react";

class Search extends Component {
  state = {};

  render() {
    return (
      <div className="ps-search" id="site-search"><a className="ps-btn--close" href="#"></a>
        <div className="ps-search__content">
          <form className="ps-form--primary-search" action="do_action" method="post">
            <input className="form-control" type="text" placeholder="Search for..." />
            <button><i className="aroma-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
