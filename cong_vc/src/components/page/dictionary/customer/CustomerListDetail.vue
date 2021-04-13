<template>
<div v-if="showdialog1">
    <div class="m-dialog dialog-detail">
        <div class="dialog-model">

        </div>
        <div class="dialog-content">
            <div class="dialog-header">
                <div class="dialog-header-title">
                    Thông tin nhân viên
                </div>
                <div class="dialog-header-close">
                    <button class="btn-exit"></button>
                </div>
            </div>
            <div class="dialog-body">
                <div class="dialog-body-top">
                    <div class="body-top-item1">
                        <div class="top-img"></div>
                        <div class="top-img-title">Vui lòng chọn ảnh có định dạng
                            <br> <span>.jpg,.jpeg,.png,.gif</span>
                        </div>
                    </div>
                    <div class="body-top-item2">
                        <div class="top-item">
                            <div class="top-item-label">Mã khách hàng(<span style="color:red">*</span>)</div>
                            <div class="top-item-input"><input fieldName="CustomerCode" id="txtCustomerCode" class="input-required" type="text"></div>
                        </div>
                        <div class="top-item">
                            <div class="top-item-label">Mã thẻ thành viên</div>
                            <div class="top-item-input"><input fieldName="MemberCardCode" id="txtMemberCardCode" class="input-required" type="text">
                            </div>
                        </div>
                        <div class="top-item">
                            <div class="top-item-label">Ngày sinh</div>
                            <div class="top-item-input">
                                <input asp-format="dd/MM/yyyy" fieldName="DateOfBirth" id="dtDateOfBirth" class="input-required" type="date"></div>
                        </div>
                    </div>
                    <div class="body-top-item3">
                        <div class="top-item">
                            <div class="top-item-label">Họ và tên(<span style="color:red">*</span>)</div>
                            <div class="top-item-input"><input fieldName="FullName" id="txtFullName" class="input-required" type="text"></div>
                        </div>
                        <div class="top-item">
                            <div class="top-item-label">Nhóm khách hàng</div>
                            <div class="top-item-input">
                                <select fieldName="CustomerGroupId" name="" id="cbxCustomerGroupName" class="input">

                                </select>
                            </div>
                        </div>
                        <div class="top-item">
                            <div class="top-item-label">Giới tính</div>
                            <div class="top-item-radio" id="gender">

                                <input id="nam" fieldName="Gender" name="gioitinh" type="radio" value="1">
                                <label for="nam">Nam</label>
                                <input id="nu" fieldName="Gender" name="gioitinh" type="radio" value="0" style="margin-left: 10px;">
                                <label for="nu">Nữ</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dialog-body-center">
                    <div class="body-center-item1">
                        <div class="center-item">
                            <div class="center-item-label">Email</div>
                            <div class="center-item-input"><input fieldName="Email" id="txtEmail" class="input-required" type="email" placeholder="congvc@gmail.com"></div>
                        </div>

                        <div class="center-item">
                            <div class="center-item-label">Tên công ty</div>
                            <div class="center-item-input">
                                <input fieldName="CompanyName" id="txtCompanyName" class="input-required" type="text"></div>
                        </div>
                    </div>
                    <div class="body-center-item2">
                        <div class="center-item">
                            <div class="center-item-label">Số điện thoại(<span style="color:red">*</span>)</div>
                            <div class="center-item-input">
                                <input fieldName="PhoneNumber" id="txtPhoneNumber" class="input-required" type="tel"></div>
                        </div>

                        <div class="center-item">
                            <div class="center-item-label">Mã số thuế</div>
                            <div class="center-item-input">
                                <input fieldName="CompanyTaxCode" id="txtCompanyTaxCode" class="input-required" type="text" placeholder="Mã số thuế của công ty"></div>
                        </div>
                    </div>
                </div>
                <div class="dialog-body-bottom">
                    <div class="bottom-item">
                        <div class="bottom-item-label">Địa chỉ</div>
                        <div class="bottom-item-input"><input fieldName="Address" id="txtAddress" class="input-required" type="text"></div>

                    </div>
                </div>
                <div class="dialog-footer">
                    <button class="btn-close" @click="controldialog">Hủy</button>
                    <button class="btn-save"> <i class="fa fa-save fa-1x"></i>Lưu</button>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showdialog1: true,
        }
    },
    methods: {
        controldialog() {
            this.showdialog1 = false;
            console.log(this.showdialog1);
        }
    }
}
</script>

<style>
@import '../../../../css/components/dialog.css';
</style>
