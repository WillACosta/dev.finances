import formatCurrency from './utils/utilities.js';

export default class View {
  innerContent(transaction) {
    const cssClass = transaction.value > 0 ? "success" : "danger";

    const amount = formatCurrency(transaction.value);

    const html = `
    <td>${transaction.description}</td>
    <td class="${cssClass}">${amount}</td>
    <td>${transaction.date}</td>
    <td>
      <span class="icon">
        <i class="fas fa-minus-circle"></i>
      </span>
    </td>
    `;

    return html;
  }

  appendToHTMLTree(el, transaction) {
    const tr = document.createElement("tr");
    tr.innerHTML = this.innerContent(transaction);
    el.appendChild(tr);
  }
}
