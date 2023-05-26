//  Os campos createdAt e updatedAt são salvos no banco de dados
//  utilizando UTC-0, o fuso brasileiro é UTC-3.
//  Para que as tarefas apareçam corretamente nos dias precisamos adicionar 3
//  horas no objeto Date de busca.

// Ex: Um registro criado no dia 01/01/2023 às 22h no Brasil,
// é salvo no banco como 02/01/2023 às 01h.
// Então precisamos que a busca aconteça no UTC entre 01/01/2023 às 3h e 02/01/2023 às 3h.
// Que corresponde ao intervalo de 01/01/2023 às 00h e 02/01/2023 às 00h no horário brasileiro.

export function add3Hours(date: Date) {
  const offset = date.getTimezoneOffset();

  const offsetMilliseconds = offset * 60 * 1000;

  return new Date(date.getTime() + offsetMilliseconds);
}
