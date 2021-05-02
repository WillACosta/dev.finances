import Transaction from './transaction.js';

export default class Modal {
  constructor(id) {
    this._modalRef = id;
  }

  open() {
    this._modalRef.classList.add("modal-active", true);
  }

  close() {
    this._modalRef.classList.remove("modal-active", true);
  }

  saveTransaction(payload) {
    const transactionService = new Transaction(payload);
    transactionService.save();
  }
}
