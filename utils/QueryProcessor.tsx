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
    ;
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
