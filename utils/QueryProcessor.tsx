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
    const afterPrefix = query.split(":")[1];         
    const numbers = afterPrefix
      .split(",")                                     
      .map(part => parseFloat(part.trim()))          
      .filter(n => !Number.isNaN(n));                
  
    if (numbers.length === 0) return "";
  
    const largest = Math.max(...numbers);
    return String(largest);
  }

  if (query.toLowerCase().includes("plus")) {
    const match = query.match(/(\d+)\s+plus\s+(\d+)/i);
    if (match) {
      const left = parseInt(match[1], 10);
      const right = parseInt(match[2], 10);
      return String(left + right);
    }
  }
  if (query.toLowerCase().includes("minus")) {
    const match = query.match(/(\d+)\s+minus\s+(\d+)/i);
    if (match) {
      const left = parseInt(match[1], 10);
      const right = parseInt(match[2], 10);
      return String(left - right);
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const match = query.match(/(\d+)\s+multiplied\s+by\s+(\d+)/i);
    if (match) {
      const left = parseInt(match[1], 10);
      const right = parseInt(match[2], 10);
      return String(left * right);
    }
  }
  if (query.toLowerCase().includes("square and a cube")) {
    const match = query.match(/square\s+and\s+a\s+cube:\s+(\d+)+,\s+(\d+)+,\s+(\d+)+,\s+(\d+)+,\s+(\d+)+,\s+(\d+)+,\s+(\d+)/i);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const num3 = parseInt(match[3], 10);
      const num4 = parseInt(match[4], 10);
      const num5 = parseInt(match[5], 10);
      const num6 = parseInt(match[6], 10);
      const num7 = parseInt(match[7], 10);
      let nums: number[] = [num1, num2, num3, num4, num5, num6, num7];
      let res: number[] = []
      for (let num of nums) {
        if (Math.sqrt(num) % 1 === 0 && Math.cbrt(num) % 1 === 0) {
          res.push(num);
        }
      }
      return String(res.join(", "));
    }
  }

  if (query.toLowerCase().includes("primes")) {
    const match = query.match(/primes:\s+(\d+)+,\s+(\d+)+,\s+(\d+)+,\s+(\d+)+,\s+(\d+)/i);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const num3 = parseInt(match[3], 10);
      const num4 = parseInt(match[4], 10);
      const num5 = parseInt(match[5], 10);
      let nums: number[] = [num1, num2, num3, num4, num5];
      let res: number[] = []
      for (let num of nums) {
        if (isPrime(num)) {
          res.push(num);
        }
      }
      return String(res.join(", "));
    }
  }

  if (query.toLowerCase().includes("power of")) {
    const match = query.match(/(\d)\s+ to\s+ the\s+ power\s+ of\s+(\d+)/i);
    if (match) {
      const base = parseInt(match[1], 10);
      const exponent = parseInt(match[2], 10);
      return String(Math.pow(base, exponent));
    }
  }
  return "";
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;          
  if (num === 2) return true;         
  if (num % 2 === 0) return false;    

  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;                   
    }
  }
  return true;                       
}