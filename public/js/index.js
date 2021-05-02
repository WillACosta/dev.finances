import Modal from "./modal.js";
import View from "./view.js";
import Storage from "./storage.js";

/** Modal */
const modalInstance = new Modal(document.getElementById("modal"));
const modalForm = document.getElementById("modal-form");

document.getElementById("newTransaction").onclick = () => {
  modalInstance.open();
};

document.getElementById("modal-cancel-btn").onclick = () => {
  modalInstance.close();
};

document.getElementById("modal-save-btn").onclick = () => {
  const values = Array.from(modalForm.elements).map((el) => el.value);

  const payload = {
    description: values[0],
    value: values[1],
    date: values[2],
  };

  modalInstance.saveTransaction(payload);
};

const onload = () => {
  const tbody = document.querySelector("tbody");
  const view = new View();
  const storage = new Storage();

  const transactions = storage.getTransactions();
  transactions.forEach(transaction => view.appendToHTMLTree(tbody, transaction));
};

window.onload = onload;
