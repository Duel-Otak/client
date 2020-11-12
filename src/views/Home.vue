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
      <div class="container-fluid p-10">
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
                <div class="col-lg-12 col-md-12">
                  <div class="progress m-b-5">
                      <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div>
                  </div>
                  <div class="card mcard_3">
                    <div class="header l-cyan">
                      <h4 class="mt-4 mb-1">
                        Cuaca sedang mendung. Ada 5 orang tapi hanya ada 1 payung. Bagaimana caranya agar mereka semua tidak kehujanan?
                      </h4>
                    </div>
                    <div class="body">
                      <!-- <div class="member-img">
                        <a href="profile.html"><img src="@/assets/bg-timer.jpg" width="100px" height="100px" class="rounded-circle img-raised"
                            alt="profile-image"></a>
                      </div> -->
                      <hr>
                      <div class="row">
                        <div class="col-6">
                          <button class="btn btn-primary btn-lg" style="width:100%;">Berteduh Satu Payung</button>
                        </div>
                        <div class="col-6">
                          <button class="btn btn-primary btn-lg" style="width:100%;">Tinggal jalan saja</button>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <button class="btn btn-primary btn-lg" style="width:100%;">Rebutan Payung</button>
                        </div>
                        <div class="col-6">
                          <button class="btn btn-primary btn-lg" style="width:100%;">Aku bingung mau jawab apa</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
