import React, { Component } from "react";

class SizeGuide extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
          <div className="ps-block--document-content no-uppercase">
            <h3>SIZES GUIDE</h3>
            <div className="table-responsive mb-50">
              <table className="table ps-table">
                <tbody>
                  <tr>
                    <td><strong>US</strong></td>
                    <td><strong>Bust</strong></td>
                    <td><strong>Waist</strong></td>
                  </tr>
                  <tr>
                    <td>XXXS-0</td>
                    <td>31%</td>
                    <td>23%</td>
                  </tr>
                  <tr>
                    <td>XXS-2</td>
                    <td>32%</td>
                    <td>24%</td>
                  </tr>
                  <tr>
                    <td>XS-4</td>
                    <td>34%</td>
                    <td>26%</td>
                  </tr>
                  <tr>
                    <td>S-6</td>
                    <td>36%</td>
                    <td>28%</td>
                  </tr>
                  <tr>
                    <td>M-8</td>
                    <td>38%</td>
                    <td>30%</td>
                  </tr>
                  <tr>
                    <td>XL-12</td>
                    <td>42%</td>
                    <td>35%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table ps-table">
                <tbody>
                  <tr>
                    <td><strong>US</strong></td>
                    <td><strong>Bust</strong></td>
                    <td><strong>Waist</strong></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>31%</td>
                    <td>23%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>32%</td>
                    <td>24%</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>34%</td>
                    <td>26%</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>36%</td>
                    <td>28%</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>38%</td>
                    <td>30%</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>42%</td>
                    <td>35%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SizeGuide;
