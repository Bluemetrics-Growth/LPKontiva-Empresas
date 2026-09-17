import React from 'react';
export function Field({ label, optional = false, type = 'text', as, options = [], id, ...rest }) {
  const control = as === 'textarea'
    ? <textarea id={id} {...rest}></textarea>
    : as === 'select'
      ? <select id={id} {...rest}>{options.map(o => <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>)}</select>
      : <input type={type} id={id} {...rest} />;
  return <div className="f-field">
    <label htmlFor={id}>{label} {optional && <span className="opt">(opcional)</span>}</label>
    {control}
  </div>;
}
