// import Items from "./components/Items.js";

// class App {
//   constructor() {
//     const $app = document.querySelector('#app');
//     new Items($app);
//   }
// }

// new App();

<div id="com">
  <h1 id="title">Javascript Example: 모달창 만들기</h1>
      
  <button id="open">모달창 열기</button>
  <div class="modal hidden">
      <div class="md_overlay"></div>
      <div class="md_content">
          <h1>샘플 모달창</h1>
          <div class="modal_text">
              자바스크립트로 모달창을 만들어 봤습니다. 
              <div class="js-shapes">
                <span class="ib">
                        <input type="checkbox" name="shapes" class="shapes" value="circle" id="cb-circle"/> <label for="cb-circle">Circle</label>
                      </span>
                <span class="ib">
                        <input type="checkbox" name="shapes" class="shapes" value="diamond" id="cb-diamond"/> <label for="cb-diamond">Diamond</label>
                      </span>
                <span class="ib">
                        <input type="checkbox" name="shapes" class="shapes" value="square" id="cb-square"/> <label for="cb-square">Square</label>
                      </span>
                <span class="ib">
                        <input type="checkbox" name="shapes" class="shapes" value="triangle" id="cb-triangle"/> <label for="cb-triangle">Triangle</label>
                      </span>
                <span class="ib">
                        <input type="checkbox" name="shapes" class="shapes" value="all" id="cb-all" checked/> <label for="cb-all">all Shapes</label>
                      </span>

  </div>
          </div>
          <button>X</button>
      </div>
  </div>
</div>