export function createDate(year: string, month: string, day?: string) {
  console.log({ year, month, day });

  const gte = add3Hours(
    new Date(day ? `${year}-${month}-${day}` : `${year}-${month}-01`)
  );

  const lte = add3Hours(
    new Date(
      day
        ? `${year}-${month}-${String(parseInt(day as string) + 1).padStart(
            2,
            "0"
          )}`
        : `${year}-${String(parseInt(month as string) + 1).padStart(2, "0")}-01`
    )
  );

  console.info({ gte, lte });

  return { gte, lte };
}
