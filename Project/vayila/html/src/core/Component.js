// document.querySelector("input[name=hobbyAll]").addEventListener("change", function (e) {
//   e.preventDefault();
//   var list = document.querySelectorAll("input[name=hobby]");
//   for (var i = 0; i < list.length; i++) {
//       list[i].checked = this.checked;
//   }
// });

//필요한 엘리먼트들을 선택한다.
const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".md_overlay");
const closeButton = modal.querySelector("button");
//동작함수
const openModal = () => {
    modal.classList.remove("hidden");
}
const closeModal = () => {
    modal.classList.add("hidden");
}
//클릭 이벤트
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// export default class Component {
//     $target;
//     $state;
//     constructor ($target) {
//       this.$target = $target;
//       this.setup();
//       this.render();
//     }
//     setup () {};
//     template () { return ''; }
//     render () {
//       this.$target.innerHTML = this.template();
//       this.setEvent();
//     }
//     setEvent () {}
//     setState (newState) {
//       this.$state = { ...this.$state, ...newState };
//       this.render();
//     }
//   }