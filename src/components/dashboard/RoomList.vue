<template>
  <div class="chat_window body">
    <div class="chat-header">
      <div class="user">
        <img src="https://avatars.dicebear.com/api/avataaars/pikachu.svg?mood[]=happy" alt="avatar" />
        <div class="chat-about">
          <div class="chat-with">Player Login</div>
          <div class="chat-num-messages">memenangkan 10 pertandingan</div>
        </div>
      </div>
      <div class="">
        <button class="btn btn-sm btn-primary p-2">
          <i class="zmdi zmdi-group-work"></i> <span> CREATE ROOM </span>
        </button>
      </div>
    </div>
    <hr>
    <!-- <img src="https://avatars.dicebear.com/api/bottts/john.svg?mood[]=happy" alt=""> -->
    <div class="row clearfix">
      <div class="col-lg-4 col-md-12">
        <div class="card small_mcard_1 bg-light">
          <div class="user">
            <img src="https://avatars.dicebear.com/api/bottts/pikachu.svg?mood[]=happy" alt="profile-image">
            <div class="details">
              <h6 class="mb-0 mt-2">Room Name</h6>
              <p class="mb-0"><small>Hostname</small></p>
              <button class="btn btn-primary">JOIN</button>
            </div>
          </div>
          <div class="footer">
            <div class="progress-container progress-primary">
              <div class="d-flex ">
                <div class="p-1">
                  <strong><span class="progress-badge">100 Players</span></strong>
                </div>
                <div class="ml-auto p-1">
                  <strong><span class="progress-badge">Win the game now</span></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12">
        <div class="card small_mcard_1 bg-light">
          <div class="user">
            <img src="https://avatars.dicebear.com/api/bottts/mano.svg?mood[]=happy" alt="profile-image">
            <div class="details">
              <h6 class="mb-0 mt-2">Room Name</h6>
              <p class="mb-0"><small>Hostname</small></p>
              <button class="btn btn-primary">JOIN</button>
            </div>
          </div>
          <div class="footer">
            <div class="progress-container progress-primary">
              <div class="d-flex ">
                <div class="p-1">
                  <strong><span class="progress-badge">100 Players</span></strong>
                </div>
                <div class="ml-auto p-1">
                  <strong><span class="progress-badge">Win the game now</span></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12">
        <div class="card small_mcard_1 bg-light">
          <div class="user">
            <img src="https://avatars.dicebear.com/api/bottts/daktau.svg?mood[]=happy" alt="profile-image">
            <div class="details">
              <h6 class="mb-0 mt-2">Room Name</h6>
              <p class="mb-0"><small>Hostname</small></p>
              <button class="btn btn-primary">JOIN</button>
            </div>
          </div>
          <div class="footer">
            <div class="progress-container progress-primary">
              <div class="d-flex ">
                <div class="p-1">
                  <strong><span class="progress-badge">100 Players</span></strong>
                </div>
                <div class="ml-auto p-1">
                  <strong><span class="progress-badge">Win the game now</span></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Room List -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
a {
  text-decoration: none;
}
</style>
