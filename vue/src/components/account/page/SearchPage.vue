<template>
  <div class="bd-example">
    <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">

      <li class="nav-item" role="presentation">
        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab"
          aria-controls="home" aria-selected="false">ID</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
          role="tab" aria-controls="profile" aria-selected="true">PassWord</button>
      </li>
      
    </ul>
    
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
        <p>111111111111</p>
      </div>
      <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p>222222222222</p>
        <modal-component />
      </div>
    </div>
  </div>
</template>


<script>
  import ModalComponent from "./common/ModalComponent.vue";
  export default {
    name: "SearchPage",
    components: {
      ModalComponent,
    },
  };
</script>