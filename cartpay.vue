<template>
  <div class="cart-pay">
    <div class="cart-address-info">
      <div class="address-info-top">
        <h4>Địa chỉ nhận hàng</h4>
        <a href="#">Thay đổi địa chỉ</a>
      </div>
      <div class="address-info-content">
        <p>
          <b>Họ và tên:</b>
          <span>Nguyễn Hải Đạt</span>
        </p>
        <p>
          <b>Số điện thoại:</b>
          <span>0931139399</span>
        </p>
        <p>
          <b>Địa chỉ nhận hàng:</b>
          <span class="add">
            <strong>85 Vũ Trọng Phụng, Quận Thanh Xuân, tp. Hà Nội</strong>
            <br />Số 1 Ngụy Như, Quận Thanh Xuân, tp. Hà Nội
          </span>
        </p>
        <p>
          <b>Ghi chú:</b>
          <span>Giao hàng giờ hành chính</span>
        </p>
      </div>
    </div>
    <div class="cart-pay-method">
      <h4 class="method-title">CHỌN HÌNH THỨC THANH TOÁN</h4>
      <hr />
      <div class="method-item">
        <div class="icon-check">
          <input type="radio" name="pay-method" />
          <span></span>
        </div>
        <div class="method-item-content">
          <b>Thanh toán tại nhà (C.O.D)</b>
          <p>Giao hàng tận nơi, xem hàng tại chỗ, không thích có thể đổi trả lập tức cho nhân viên giao hàng</p>
        </div>
      </div>
      <div class="method-item">
        <div class="icon-check">
          <input type="radio" name="pay-method" checked />
          <span></span>
        </div>
        <div class="method-item-content">
          <b>Thẻ ATM/Internet Banking</b>
          <p>Thanh toán cực kì tiện lợi, nhanh chóng, và an toàn</p>
        </div>
        <div class="bank-list">
          <p>Chọn ngân hàng anh/chị muốn thanh toán:</p>
          <div class="bank-item">
            <input type="radio" name="bank" checked />
            <picture>
              <img src="images/VP_Bank.png" alt />
            </picture>
          </div>
          <div class="bank-item">
            <input type="radio" name="bank" />
            <picture>
              <img src="images/bidv.png" alt />
            </picture>
          </div>
          <div class="bank-item">
            <input type="radio" name="bank" />
            <picture>
              <img src="images/techcombank.png" alt />
            </picture>
          </div>
          <div class="bank-item">
            <input type="radio" name="bank" />
            <picture>
              <img src="images/vietcombank.png" alt />
            </picture>
          </div>
          <div class="bank-item">
            <input type="radio" name="bank" />
            <picture>
              <img src="images/Agribank.png" alt />
            </picture>
          </div>
          <div class="bank-item">
            <input type="radio" name="bank" />
            <picture>
              <img src="images/viettinbank.png" alt />
            </picture>
          </div>
          <div class="bank-item">
            <input type="radio" name="bank" />
            <picture>
              <img src="images/tpbank.png" alt />
            </picture>
          </div>
          <div class="bank-item">
            <input type="radio" name="bank" />
            <picture>
              <img src="images/sacombank.png" alt />
            </picture>
          </div>
        </div>
      </div>
      <div class="method-item">
        <div class="icon-check">
          <input type="radio" name="pay-method" />
          <span></span>
        </div>
        <div class="method-item-content">
          <b>Thanh toán qua Wepay</b>
          <p>Wepay mang tới cho anh/chị kênh thanh toán đầy đủ nhất, thuận tiện nhất.</p>
        </div>
        <div class="electronic-wallets">
          <a href>
            <img src="images/icon-momo.png" alt />
          </a>
          <a href>
            <img src="images/icon-viettelpay.png" alt />
          </a>
          <a href>
            <img src="images/icon-vnqr.png" alt />
          </a>
        </div>
      </div>
      <hr />
      <span class="pay-method-note">
        <span class="color-red">*</span>Anh/chị đã chọn thanh toán qua thẻ ATM/Internet Banking
      </span>
    </div>
  </div>
</template>
