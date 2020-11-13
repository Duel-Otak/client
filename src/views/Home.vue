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
            <button class="btn btn-danger btn-icon mobile_menu" type="button"><i class="zmdi zmdi-power"></i></button>

          </div>
          <div class="col-lg-5 col-md-6 col-sm-12">
                <button class="btn btn-danger btn-icon float-right" type="button"><i class="zmdi zmdi-power"></i></button>
          </div>
        </div>
      </div>
      <div class="container-fluid p-10" style="min-height: 70vh">
        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="card">
              <!-- * Player List * -->
              <router-view />
              <!-- * Question * -->
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
