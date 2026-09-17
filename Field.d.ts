/** Campo de formulário (label 12px/600 + input/select/textarea). Focus: borda + ring ciano. */
export interface FieldProps {
  label: string;
  /** Acrescenta "(opcional)" cinza ao label */
  optional?: boolean;
  /** Tipo do input (quando as = input) */
  type?: string;
  /** 'textarea' | 'select' — default input */
  as?: 'textarea' | 'select';
  /** Para select: strings ou {value,label} */
  options?: any[];
  id?: string;
  placeholder?: string;
}
