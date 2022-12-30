export const truncate = (str: string, n: number) => {
  if (str.length <= n) return str;
  const fixedStr = str.slice(0, n - 2);
  if (
    fixedStr.endsWith(" ") ||
    fixedStr.endsWith(",") ||
    fixedStr.endsWith(".")
  )
    return fixedStr.slice(0, -1) + "...";
  return fixedStr + "...";
};
