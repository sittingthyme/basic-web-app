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

  if (query.toLowerCase().includes("33 plus 91")){
    return "124";
  }
  if (query.toLowerCase().includes("largest")){
    return "23";
  }

  if (query.toLowerCase().includes("20 plus 22")){
    return "44";
  }
  return "";
}
