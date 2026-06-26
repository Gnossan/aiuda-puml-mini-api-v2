import { encode } from 'plantuml-encoder';

export const getPlantUmlUrl = (code: string, format: 'svg' | 'png' = 'svg'): string => {
  const encoded = encode(code);
  return `https://www.plantuml.com/plantuml/${format}/${encoded}`;
};
