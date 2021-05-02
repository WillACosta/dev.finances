export default class Storage {
  getTransactions() {
    // return (
    //   localStorage.getItem("dev.finances") || "Não existem dados para exibir"
    // );
    return this.fakeData();
  }

  fakeData() {
    return [
      {
        description: "Conta de luz",
        value: -20000,
        date: "2021/03/20",
      },
      {
        description: "Sálario",
        value: 1100.56,
        date: "2021/03/20",
      },
      {
        description: "Conta de Água",
        value: -2200,
        date: "2021/03/20",
      },
    ];
  }
}
