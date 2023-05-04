export const getAtualPeriodNames = () => {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return [meses[new Date().getMonth()], new Date().getFullYear()];
};
