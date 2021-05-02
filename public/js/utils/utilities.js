/**
 * Converte um valor para moeda corrente
 * @param {*} amount - Valor para conversão em moeda
 */
const formatCurrency = (amount) => {
  const simbol = Number(amount) < 0 ? "-" : "";

  amount = String(amount).replace(/\D/g, ""); // COnsidera apenas números

  amount = Number(amount) / 100; // Quebrar as casas

  amount = amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return `${simbol} ${amount}`;
};

export default formatCurrency;
