export function valueProvider(value: string) {
  if (!value) return "모모모";
  switch (value.toUpperCase()) {
    case "E":
      return "외향형";
    case "I":
      return "내향형";
    case "S":
      return "감각형";
    case "N":
      return "직관형";
    case "T":
      return "사고형";
    case "F":
      return "감정형";
    case "J":
      return "판단형";
    case "P":
      return "인식형";
    default:
      return "모모모";
  }
}
