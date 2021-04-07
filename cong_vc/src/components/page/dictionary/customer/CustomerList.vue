<template >
    <div>
        <div class="header-content">
            <div class="title">
                Danh mục khách hàng
            </div>
            <div class="content-feature">
                <button class="btn-default">
                    <div class="icon-add">
                        
                    </div>
                    <div class="btn-text" id="btn-add">
                        Thêm khách hàng
                    </div>
                </button>
            </div>
        </div>
        <div class="filter-bar">
            <div class="filter-left">
                <input class="icon-search input-search" type="text" placeholder="Tim kiếm theo mã, tên">
            </div>
            <div class="filter-right">
                <button class="m-btn-refresh m-second-button">
                    
                </button>
            </div>
        </div>
        <div class="grid grid-customer">
            <table border="0" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th fieldName="CustomerCode">Mã KH</th>
                        <th fieldName="FullName">Tên KH</th>
                        <th fieldName="GenderName" formatType="sex">Giới tính</th>
                        <th fieldName="Address">Địa chỉ</th>
                        <th fieldName="DateOfBirth" formatType="ddmmyyyy">Ngày sinh</th>
                        <th fieldName="Email">Email</th>
                        <th fieldName="PhoneNumber">SĐT</th>
                        <th fieldName="MemberCardCode">Mã thẻ thành viên</th>
                        <th fieldName="CompanyName">Tên công ty</th>
                        <th fieldName="CompanyTaxCode">Mã số thuế</th>
                        <th fieldName="CustomerGroupName">Xếp loại</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div class="paging-bar">
            <div class="bar-left">
                <p>Hiển thị 1-10/1000 Khách hàng</p>
            </div>
            <div class="bar-center">
                    <span class="bar-center-icon bar-center-icon-1"></span>
                    <span class="bar-center-icon bar-center-icon-2"></span>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <span class="bar-center-icon bar-center-icon-3"></span>
                    <span class="bar-center-icon bar-center-icon-4"></span>
            </div>
            <div class="bar-right">
                <p>10 Khách hàng/trang</p>
            </div>
        </div>
        <CustomerListDetail/>
    </div>
    
</template>
<script>
import CustomerListDetail from './CustomerListDetail.vue'

export default{
    name: "Customer",
    components: {
        CustomerListDetail
    },
};
</script>

<style scoped>
.grid-customer {
    width: 100%;
    height: calc(100vh - 229px);
    overflow: scroll;
}

.text-align-right {
    text-align: right;
}

.text-align-center {
    text-align: center;
}
.content {
    position: absolute;
    top: 61px;
    left: 221px;
    width: calc(100% - 221px);
    height: calc(100vh - 61px);
    background-color: #ffffff;
}


/* page title*/

.content .header-content {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content .header-content .title {
    font-size: 20px;
    font-weight: bold;
}
.filter-bar {
    width: 100%;
    display: flex;
    align-items: center;
    height: 40px;
}

.filter-bar .filter-left {
    padding-left: 16px;
}

.filter-bar .filter-right {
    position: absolute;
    right: 16px;
    align-items: center;
}

/* filter-bar*/

.content .filter-bar {
    width: 100%;
}


/* grid*/

.content .grid {
    width: 100%;
}


/* paging-bar*/

.content .paging-bar {
    width: 100%;
    height: 56px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    position: relative;
    font-size: 13px;
    border-top: 1px solid #e5e5e5;
}

.paging-bar .bar-center {
    display: flex;
    margin-top: 10px;
    padding: 0;
}

.paging-bar .bar-center button {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 5px 5px 0 5px;
    align-items: center;
}

.paging-bar .bar-center span{
    font-size: 24px;
    padding-left: 4px;
    padding-right: 4px;
    cursor: pointer;
    margin-top: 6px;
}

.paging-bar .bar-center button:hover {
    background-color: #E9EBEE;
    cursor: pointer;
}

.paging-bar .bar-center button:focus {
    background: #019160;
    outline: none;
}

.paging-bar .bar-right {
    padding-right: 5px;
}

.paging-bar .bar-left {
    padding-left: 5px;
}

/* thu icon */
.icon-option-default-16{
    width: 16px;
    height: 16px;
    background-image: url('../../../../assets/icon/option.png');
    background-position: center;
    background-repeat: no-repeat;
}

.icon-add{
    width: 16px;
    height: 16px;
    background-image: url('../../../../assets/icon/add.png');
    background-position: center;
}

.icon-search{
    background-image:  url('../../../../assets/icon/search.png');
    background-repeat: no-repeat;
    background-position: 16px center;
}

.bar-center .bar-center-icon{
margin: 5px;
height: 20px;
width: 20px;
}

.bar-center-icon-1{
background-image: url('../../../../assets/icon/btn-firstpage.svg');
background-position: center;
    background-repeat: no-repeat;
}

.bar-center-icon-2{
background-image: url('../../../../assets/icon/btn-prev-page.svg');
background-position: center;
    background-repeat: no-repeat;
}

.bar-center-icon-3{
background-image: url('../../../../assets/icon/btn-next-page.svg');
background-position: center;
    background-repeat: no-repeat;
}

.bar-center-icon-4{
background-image: url('../../../../assets/icon/btn-lastpage.svg');
background-position: center;
    background-repeat: no-repeat;
}
</style>