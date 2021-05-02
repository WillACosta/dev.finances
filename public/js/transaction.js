export default class Transaction {
  constructor({ description, value, date }) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  save() {
    if (this.value === NaN) return new Error("O valor informado é inválido!");

    if (this.value < 0) this.expanses();
    else this.income();
  }

  static income() {}

  static expanses() {
    console.log("EXPANSE ->");
  }
}
