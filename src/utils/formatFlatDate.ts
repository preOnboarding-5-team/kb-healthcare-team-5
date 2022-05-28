const formatFlatDate = (flatDate: string) =>
  `${flatDate.substring(0, 4)}.${flatDate.substring(4, 6)}.${flatDate.substring(
    6
  )}`;

export { formatFlatDate };
