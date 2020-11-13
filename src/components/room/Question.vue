<template>
  <div class="chat_window body">
    <div class="d-flex">
      <div class="p-2">
        <div class="chat-header">
          <div class="d-flex justify-content-between mr-auto">
            <div class="user text-left">
              <div class="chat-about">
                <div class="chat-with">Nama Room</div>
                <div class="chat-num-messages">2 Player</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-auto p-2">
        <!-- Menggunakan V-IF -->
        <button class="btn btn-primary btn-lg">START</button>
        <div class="bg-green flex-fill bd-highlight float-right text-center m-1" style="width: 120px; height: 42px">
          <h5 class="p-2">Score : 83</h5>
        </div>
      </div>
    </div>
    <div class="chat-header">
      <a href="javascript:void(0);" class="list_btn btn btn-info btn-round float-md-right"><i
          class="zmdi zmdi-comments"></i></a>
    </div>
    <hr>
    <!-- Blur Imaage HIlang ketika Start -->
    <div class="col-lg-12 col-md-12 section-blur">
      <div class="progress m-b-5">
          <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete (danger)</span> </div>
      </div>
      <div class="card mcard_3">
        <div class="header l-grey-custom blu">
            <strong>Cuaca sedang mendung. Ada 5 orang tapi hanya ada 1 payung. Bagaimana caranya agar mereka semua tidak kehujanan?</strong>
        </div>
        <div class="body">
          <!-- <div class="member-img">
            <a href="profile.html"><img src="@/assets/bg-timer.jpg" width="100px" height="100px" class="rounded-circle img-raised"
                alt="profile-image"></a>
          </div> -->
          <hr>
          <div class="row">
            <div class="col-6">
              <button class="btn btn-success btn-lg" style="width:100%;">Betul</button>
            </div>
            <div class="col-6">
              <button class="btn btn-danger btn-lg" style="width:100%;">Salah</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.section-blur {
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(10px);
  pointer-events: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
