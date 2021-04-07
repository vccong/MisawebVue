<template>
  <div class="header">
        <div class="header-left">
            <select name="" id="" class="select">
                <option value="" class="select-item">Nhà hàng Biển Đông</option>
                <option value="" class="select-item">Nhà hàng Biển Tây</option>
                <option value="" class="select-item">Nhà hàng Biển Bắc</option>
            </select>
        </div>
        <div class="header-right">
            <img class="img-admin" src="../../assets/icon/avatar-default.png" alt="">
            <p>Vuong Chi Cong</p>
            <img class="img-option" src="../../assets/icon/option.png" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    width: calc(100% - 221px);
    height: 60px;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    justify-content: space-between;
}

.header .header-left .select {
    margin: 20px 0 0 16px;
    font-weight: bold;
}

.header .select .select-item {
    font-weight: bold;
}

.header .header-right {
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.header .header-right .img-admin{
    width: 30px;
    margin-right: 10px;
}

.header .header-right p{
    margin-right: 10px;
}

.header .header-right .img-option{
    width: 30px;
}

</style>