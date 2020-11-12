<template>
  <div class="home">
  <!-- Main Content -->
  <section class="content">
    <div class="body_scroll">
      <div class="block-header">
        <div class="row">
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h2>ADU OTAK</h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="#"><i class="zmdi zmdi-home"></i> Home</a></li>
              <li class="breadcrumb-item active">Room</li>
            </ul>
            <button class="btn btn-primary btn-icon mobile_menu" type="button"><i
                class="zmdi zmdi-sort-amount-desc"></i></button>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12">
            <button class="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i
                class="zmdi zmdi-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="card">
              <div class="chat_list">
                <div class="input-group">
                 <strong>List Player</strong>
                </div>
                <ul class="user_list list-unstyled mb-0 mt-3">
                  <li class="active">
                    <a href="javascript:void(0);">
                      <img src="@/assets/logo.png" alt="avatar" />
                      <div class="about">
                        <div class="name">Aiden Chavez</div>
                        <div class="status me"> <i class="zmdi zmdi-circle"></i> online </div>
                      </div>
                    </a>
                  </li>
                  <li class="active">
                    <a href="javascript:void(0);">
                      <img src="@/assets/logo.png" alt="avatar" />
                      <div class="about">
                        <div class="name">Aiden Chavez</div>
                        <div class="status me"> <i class="zmdi zmdi-circle"></i> online </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="chat_window body">
                <div class="chat-header">
                  <div class="user">
                    <img src="@/assets/logo.png" alt="avatar" />
                    <div class="chat-about">
                      <div class="chat-with">Nama Room</div>
                      <div class="chat-num-messages">2 Player</div>
                    </div>
                  </div>
                  <!-- <div class="setting">
                    <a href="javascript:void(0);" class="btn btn-sm btn-warning"><i class="zmdi zmdi-camera"></i></a>
                    <a href="javascript:void(0);" class="btn btn-sm btn-info"><i class="zmdi zmdi-file-text"></i></a>
                  </div> -->
                  <a href="javascript:void(0);" class="list_btn btn btn-info btn-round float-md-right"><i
                      class="zmdi zmdi-comments"></i></a>
                </div>
                <hr>
                <ul class="chat-history">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>
