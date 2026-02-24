export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "nicholan";
  }
  if (query.toLowerCase().includes("andrew id")) {
    return "nicholan";
  }

  if (query.toLowerCase().includes("largest")){
    const match = query.match(/largest:(\d+),(\d+),(\d+)/i);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const num3 = parseInt(match[3], 10);
      return String(Math.max(num1, num2, num3));
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const match = query.match(/(\d+)\s+plus\s+(\d+)/i);
    if (match) {
      const left = parseInt(match[1], 10);
      const right = parseInt(match[2], 10);
      return String(left + right);
    }
  }
  return "";
}
