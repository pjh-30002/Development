import Component from "../core/Component.js";

export default class Items extends Component {
  setup () {
    this.$state = { items: ['item1', 'item2'] };
  }
  template () {
    const { items } = this.$state;
    return `
        <div id="com">
            <h1 id="title">Javascript Example: 모달창 만들기</h1>
                
            <button id="open">모달창 열기</button>
            <div class="modal hidden">
                <div class="md_overlay"></div>
                <div class="md_content">
                    <h1>샘플 모달창</h1>
                    <div class="modal_text">
                        자바스크립트로 모달창을 만들어 봤습니다. 
                    </div>
                    <button>X</button>
                </div>
            </div>
        </div>
    `
  }

  setEvent () {
    this.$target.querySelector('button').addEventListener('click', () => {
      const { items } = this.$state;
      this.setState({ items: [ ...items, `item${items.length + 1}` ] });
    });
  }
}