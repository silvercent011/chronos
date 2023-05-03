export function convertHoursToMinutes(horasString: string) {
  const regex = /^(\d+h)?(\d+m)?$/;
  const matches = regex.exec(horasString);

  if (!matches) {
    throw new Error("Formato de hora inválido.");
  }

  const horas = matches[1] ? parseInt(matches[1]) : 0;
  const minutos = matches[2] ? parseInt(matches[2]) : 0;

  return horas * 60 + minutos;
}
