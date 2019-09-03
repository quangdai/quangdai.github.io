<template>
  <div class="cart-form border">
    <div class="cart-form-top">
      <h4>Nhập địa chỉ nhận hàng</h4>
      <p>Vui lòng nhập địa chỉ nhận hàng</p>
    </div>
    <div class="info-custommer">
      <form action>
        <label for>
          Họ và tên
          <span class="not-skip">*</span>
        </label>
        <input type="text" class="form-control" placeholder="Nhập họ tên" />

        <label for>
          Số điện thoại
          <span class="not-skip">*</span>
        </label>
        <div class="form-phone-number">
          <input type="text" class="form-control" placeholder="Nhập số điện thoại liên hệ" />
          <button class="btn check-discount-code">Kiểm tra mã giảm giá</button>
        </div>
        <div class="code">
          <strong>Mã giảm giá của bạn:</strong>
          <span>#878374, #817917</span>
        </div>

        <label for>Email</label>

        <input
          type="text"
          class="form-control input-email"
          placeholder="Nhập email nhận thông tin đơn hàng"
          required
        />
        <div class="form-prefix">
          <div class="text-prefix">
            Quý khách vui lòng nhập email để kiểm tra tình trạng đơn hàng và nhận thông tin
            ưu đãi hấp dẫn!
          </div>
          <span>
            <input type="checkbox" checked="checked" />
            Tôi không có email
          </span>
        </div>

        <label for>
          Tỉnh/Thành phố
          <span class="not-skip">*</span>
        </label>
        <select class="form-control" name id>
          <option value>Chọn tỉnh / thành phố</option>
          <option value>Chọn tỉnh / thành phố</option>
          <option value>Chọn tỉnh / thành phố</option>
          <option value>Chọn tỉnh / thành phố</option>
        </select>

        <label for>
          Quận/Huyện
          <span class="not-skip">*</span>
        </label>
        <select class="form-control" name id>
          <option value>Chọn Quận/Huyện</option>
          <option value>Chọn Quận/Huyện</option>
          <option value>Chọn Quận/Huyện</option>
          <option value>Chọn Quận/Huyện</option>
        </select>

        <label for>
          Địa chỉ
          <span class="not-skip">*</span>
        </label>
        <input type="text" class="form-control" placeholder="Vd: số nhà, số ngõ" />

        <label for>Ghi chú thêm (Không bắt buộc)</label>
        <textarea class="form-control" cols="30" rows="5" placeholder="Nhập thêm thông tin ghi chú"></textarea>
        <div class="not-skip text-right">(*)Trường bắt buộc</div>
      </form>
    </div>
  </div>
</template>