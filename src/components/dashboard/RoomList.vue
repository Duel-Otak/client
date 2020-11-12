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
      <div class="setting">
        <a href="javascript:void(0);" class="btn btn-sm btn-info"><i class="zmdi zmdi-group-work"></i> Create Room</a>
      </div>
    </div>
    <hr>
    <!-- <img src="https://avatars.dicebear.com/api/bottts/john.svg?mood[]=happy" alt=""> -->
    <div class="row clearfix">
        <div class="col-lg- col-md-6" style="min-width: 300px">
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
              <div class="progress-container progress-primary" style="min-width: 200px">
                <span class="progress-badge">Waiting List</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 60%;">
                    <span class="progress-value">60 Players</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6" style="min-width: 300px">
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
              <div class="progress-container progress-primary" style="min-width: 200px">
                <span class="progress-badge">Waiting List</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 60%;">
                    <span class="progress-value">60 Players</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-garuda col-md-6" style="min-width: 300px">
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
              <div class="progress-container progress-primary" style="min-width: 200px">
                <span class="progress-badge">Waiting List</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 60%;">
                    <span class="progress-value">60 Players</span>
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
