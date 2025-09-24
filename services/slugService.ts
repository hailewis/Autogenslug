
import { SlugOptions } from '../types';

export const generateSlug = (text: string, options: SlugOptions): string => {
  if (!text) return '';

  const { separator, casing } = options;

  let slug = text.toString();

  // Special character map for transliteration
  const charMap: { [key: string]: string } = {
    'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
    'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
    'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
    'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ø': 'O', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ø': 'o',
    'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
    'Ý': 'Y', 'ý': 'y', 'ÿ': 'y',
    'Ñ': 'N', 'ñ': 'n',
    'Ç': 'C', 'ç': 'c',
    'ß': 'ss', 'Æ': 'AE', 'æ': 'ae', 'Œ': 'OE', 'œ': 'oe',
    'Đ': 'D', 'đ': 'd'
  };

  for (let char in charMap) {
    slug = slug.replace(new RegExp(char, 'g'), charMap[char]);
  }
  
  // Normalize to remove remaining diacritics
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Apply casing
  if (casing === 'lowercase') {
    slug = slug.toLowerCase();
  } else if (casing === 'uppercase') {
    slug = slug.toUpperCase();
  }

  slug = slug
    .replace(/\s+/g, separator) // Replace spaces with separator
    .replace(/[^\w\-~]+/g, '')   // Remove all non-word chars except separator characters
    .replace(new RegExp(`\\${separator}+`, 'g'), separator) // Replace multiple separators with a single one
    .replace(new RegExp(`^\\${separator}+|\\${separator}+$`, 'g'), ''); // Trim leading/trailing separators

  return slug;
};
