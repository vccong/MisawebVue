<template>
  <div>
      <div class="content">
          <div class="content-body">
              <div class="content-first">
                <div class="first-header">
                    <h1>
                          Nhân viên
                    </h1>
                    <div class="first-header-right">
                        <button class="b-Utilities">
                            <span>Tiện ích</span>
                            <div class="b-Utilities-icon"></div>
                        </button>
                        <div class="b-add">
                            <button class="b-add-1">
                            <span>Thêm</span>
                            </button>
                            <button class="b-add-2">
                                <div class="b-add-2-icon">

                                 </div>  
                        </button>
                        </div>
                    </div>
                </div>
            <div class="first-content">
                <div class="first-content-icon">

                </div>
                <a href="">Tất cả danh mục</a>
            </div>
            </div>
          <div class="content-second">

          </div>
          <div class="content-third">

          </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    width: calc(100vw - 198px);
    height: calc(100vh - 48px);
    position: relative;
    top: 48px;
    left: 178px;
    padding: 0 0 0 20px;
}

.content .content-body{
    padding-right: 30px;
    overflow: scroll;
    height: calc(100vh - 48px);
    position: absolute;
    top: 0;
    left: 20px;
    right: 0;
    bottom: 0;
    background-color: #f4f5f6;
}

.content-body .content-first{
    padding: 22px 0 16px;
}

.content-first .first-header{
    display: flex;
    justify-content: space-between;
}

.content-first .first-header h1{
    margin: 0;
}

.content-first .first-header-right{
    display: flex;
}

.content-first .first-header-right .b-Utilities{
    height: 36px;
    width: 103px;
    border: 1px solid #8d9096;
    border-radius: 30px;
    box-sizing: border-box;
    margin-right: 12px;
    outline: none;
    cursor: pointer;
}

.content-first .first-header-right .b-Utilities:hover{
    background-color: #afb3b7;
}

.content-first .first-header-right .b-add{
    display: flex;
    width: 103px;
    height: 36px;
    box-sizing: border-box;
    align-items: center;
    
}

.first-header-right .b-add .b-add-1{
    border-radius: 30px 0 0 30px;
    padding: 8px 14px 8px 20px;
    height: 36px;
    border: 1px solid #8d9096;
    background-color: #2ca01c;
    border-right: 0;
    outline: none;
    cursor: pointer;
    color: #ffffff;
}

.first-header-right .b-add .b-add-1:hover{
    background-color: #3fd72d;
}

.first-header-right .b-add .b-add-2{
    border-radius: 0 30px 30px 0;
    padding: 8px 0 0 8px;
    height: 36px;
    border: 1px solid #8d9096;
    background-color: #2ca01c;
    outline: none;
    cursor: pointer;
}

.first-header-right .b-add .b-add-2:hover{
    background-color: #3fd72d;
}

.b-add-2 .b-add-2-icon{
    background: url('../../assets/img/Sprites.svg')  no-repeat -848px -359px;
    width: 24px;
    height: 24px;
}

</style>