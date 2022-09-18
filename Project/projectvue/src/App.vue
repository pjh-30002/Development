<template>
  <div>
    <ParentVue />
  </div>
</template>

<script>
import myModal from '../components/Main'
import ParentVue from "./components/ParentVue.vue"
export default {
  name: 'app',
  data(){
    return {
      visible: false
    }
  },
  components: {
    appMyModal: myModal
  },
  methods: {
    handleClickButton(){
      this.visible = !this.visible
    } 
  }
}
</script>