
export type Separator = '-' | '_' | '~';
export type Casing = 'lowercase' | 'uppercase' | 'default';

export interface SlugOptions {
  separator: Separator;
  casing: Casing;
}
