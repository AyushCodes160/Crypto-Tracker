// Format large numbers with abbreviated suffixes (K, M, B, T)
export const formatNumber = (num: number): string => {
  if (num === null || num === undefined) return 'N/A';
  
  if (num === 0) return '0';
  
  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';
  
  if (absNum < 1000) {
    return sign + absNum.toFixed(2);
  }
  
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const tier = Math.floor(Math.log10(absNum) / 3);
  const suffix = suffixes[Math.min(tier, suffixes.length - 1)];
  const scale = Math.pow(10, tier * 3);
  
  const scaled = absNum / scale;
  
  return sign + scaled.toFixed(2) + suffix;
};

// Format currency with $ symbol and commas
export const formatCurrency = (amount: number): string => {
  if (amount === null || amount === undefined) return 'N/A';
  
  if (amount >= 1000000000) {
    return `$${(amount / 1000000000).toFixed(2)}B`;
  } else if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(2)}K`;
  } else if (amount < 0.01 && amount > 0) {
    return `$${amount.toFixed(6)}`;
  } else {
    return `$${amount.toFixed(2)}`;
  }
};

// Format percentage with + sign for positive values
export const formatPercentage = (percent: number): string => {
  if (percent === null || percent === undefined) return 'N/A';
  
  const sign = percent > 0 ? '+' : '';
  return `${sign}${percent.toFixed(2)}%`;
};

// Format large integer numbers with commas
export const formatInteger = (num: number): string => {
  if (num === null || num === undefined) return 'N/A';
  
  return num.toLocaleString();
};