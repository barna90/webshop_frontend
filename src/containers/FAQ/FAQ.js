import React, { Component } from "react";
import InfoSideBar from "../../components/InfoSideBar/InfoSideBar";

class FAQ extends Component {
  state = {};

  render() {
    return (
      <div className="ps-page ps-page--blog">
        <div className="ps-blog">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
                <div className="ps-block--document-content no-uppercase">
                  <h3>ÁLTALÁNOS TUDNIVALÓK</h3>
                  <p>Az áruházban feltüntetett árak érvényes bruttó fogyasztói árak, melyek nem tartalmazzák a szállítási költséget. Amennyiben azonban technikai hiba miatt téves ár jelenik meg az áruházban, az áru elküldése elõtt egyeztetés végett e-mail-ben megkeresünk.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>SZEMÉLYES ÁTVÉTEL</h3>
                  <p>A termékek személyes átvétele székhelyünkön nem lehetséges.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>1.3 How do I order?</h3>
                  <p>Shop for the items you want and add it to your shopping cart. When you have finished, you can proceed to your shopping cart and check out. Check and ensure that all information is correct before confirming your purchases and payment.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>1.4 I have problems adding items to my shopping cart</h3>
                  <p>You will be able to add the items as long as it is available. There could be an instance where the item is in someone else’s shopping cart hence the status of the items is reflected as “Temporarily Unavailable”.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>1.5 How do I pay for my orders?</h3>
                  <p>We accept payments via Paypal and all major credit and debit cards such as Mastercard, VISA and American Express.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>1.6 Can I amend and cancel my order?</h3>
                  <p>Unfortunately we are unable to cancel an order once it has been placed. This will allow us to pack your orders efficiently and to minimize errors. It is advisable to check your order before placing it.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>1.7 I have a discount code, how can I use it?</h3>
                  <p>Key in the voucher code at the field “Voucher Code” and click “Add” in your Shopping Cart page before proceeding to check out. Please note that we are unable to manually apply the voucher code to your order if you have missed keying it during check out. Kindly ensure that all information is correct before confirming your purchase.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>1.8 How will I know if my order is confirmed?</h3>
                  <p>After you have placed your order, you will receive an acknowledgement e-mail from us to confirm that your orders have been received. However, do note that orders will only be shipped when your credit card payment has been approved and billing and delivery address is verified. Alternatively, you may check the status of your order in “My Account” if you are a registered user.</p>
                </div>
                <h3 className="ps-heading ps-heading--2"> 2. SHIPPING & DELIVERY</h3>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.1 When will my order be processed?</h3>
                  <p>All orders will be processed within 2 working days, excluding weekends and public holidays. Time stated is based on Singapore Time (UTC/GMT +8hours).</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.2 How long will it take for me to receive my order?</h3>
                  <p>The Standard courier delivery time frame is approximately 5 working days and the Express courier is approximately 3 working days from the time of placing your order. This is applicable only to all Singapore deliveries. For all international deliveries, the time taken is dependent on our logistics partners and their affiliates.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.3 How can I track my delivery?</h3>
                  <p>Once the order has been dispatched, an email confirmation will be sent to you with the tracking number. You may check and track the delivery status of your orders with our local logistics partner, with your 6-digit Order Number for allSingapore deliveries.</p>
                  <p>For International deliveries, you may track your orders here</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.4 What are the shipping charges like?</h3>
                  <p>Shipping is FREE for all Singapore deliveries via Standard courier. For international deliveries, you may select your item and proceed to the check out page as charges are based on weight and volume. Upon entering your delivery details, we will auto calculate the delivery charges based on your given address without the need for payment or registration</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.5 Can I change my shipping address after my order has been confirmed?</h3>
                  <p>Unfortunately, we are unable to redirect orders once your order is confirmed. Therefore, please ensure you provide the correct shipping address.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.6 There is a missing item in my order, what should I do?</h3>
                  <p>Unfortunately, we are unable to redirect orders once your order is confirmed. Therefore, please ensure you provide the correct shipping address.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.7 I’ve received a defective item, what should I do?</h3>
                  <p>We apologize if you had received a defective item from us. Please contact our Customer Care Team at marketing@company.com with a snapshot of the product and we will get back to you as soon as we can.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.8 I’ve received an incorrect item, what should I do?</h3>
                  <p>We apologize for sending you the wrong item. Please contact our Customer Care Team at marketing@company.com and we will get back to you as soon as we can.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.9 I’ve purchased the wrong size or color</h3>
                  <p>We do not provide exchanges for size or color. We do however, accept returns for products purchased from us. You can refer to our Returns & Exchanges policy here and its procedures.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.10 I have not received my parcel, what should I do?</h3>
                  <p>Kindly drop an email to our Customer Care Team at marketing@company.com if you have not received your parcel after 10 working days and we will assist you accordingly</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.11 Will there be an additional charge for redelivery?</h3>
                  <p>There are no additional charges for redelivery up to two times. It is chargeable on the third attempt onwards.</p>
                </div>
                <div className="ps-block--document-content no-uppercase">
                  <h3>2.12 I have yet to receive my parcel within the stipulated time frame. Whom can I contact?</h3>
                  <p>You may check the status of your parcel via “Track your order” at to find out why it might have been delayed. Alternatively, you may drop us an email at marketing@company.com and we will assist you further.</p>
                </div>
              </div>
              <InfoSideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
