export default class NewPicture {
  constructor() {
    this.parentEl = document.querySelector(".container");
    this.bindToDOM();
    this.position = 0;
    this.picture = document.createElement("img");
    this.picture.src = "img/goblin.png";
    this.picture.className += "imager";
  }

  static get markup() {
    return `
        <table class="face">
            <tr id="line1">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr id="line2">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr id="line3">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
            <tr id="line4">
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
                <td class="cell"></td>
            </tr>
        </table>
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = NewPicture.markup;
  }

  clearImage() {
    const deleter = document.querySelector(".imager");
    if (deleter != null) {
      deleter.remove();
    }
  }

  addPicture() {
    for (let i = 0; i < 5; i++) {
      const positionz = Math.floor(Math.random() * 16);
      if (positionz != this.position) {
        //проверка предыдущего положения картинки
        const cells = document.querySelectorAll(".cell");
        this.clearImage();
        cells[positionz].appendChild(this.picture);
        this.position = positionz;
        break;
      }
    }
  }
}
