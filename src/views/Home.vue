<template>
  <!-- Main Content -->
  <section class="content">
    <div class="body_scroll">
      <div class="block-header">
        <div class="row">
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h2>Adu Otak</h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="#"><i class="zmdi zmdi-home"></i> Home</a></li>
              <li class="breadcrumb-item active">Room</li>
            </ul>
            <button class="btn btn-danger btn-icon mobile_menu" type="button">
              <i class="zmdi zmdi-power"></i>
            </button>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12">
            <button class="btn btn-danger btn-icon float-right" type="button">
              <i class="zmdi zmdi-power"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="card">
              <!-- Rroute vie Home -->
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
