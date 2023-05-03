export function validateTime(value: string) {
  const regex = /^(\d+h)?(\d+m)?$/;
  const matches = regex.exec(value);

  if (!matches) {
    return "O formato do tempo é inválido. Exemplo: 1h30m, 1h, 30m.";
  }

  const horas = matches[1] ? parseInt(matches[1]) : 0;
  const minutos = matches[2] ? parseInt(matches[2]) : 0;

  if (horas > 23) {
    return "O número de horas não pode ser maior que 23.";
  }

  if (minutos > 59) {
    return "O número de minutos não pode ser maior que 59.";
  }

  return true;
}
