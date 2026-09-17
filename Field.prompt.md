Campo de formulário Kontiva (página Contato). Envolver pares em `.f-row` para 2 colunas.

```jsx
<div className="f-row">
  <Field id="nome" label="Nome" placeholder="Seu nome" />
  <Field id="tel" label="Telefone / WhatsApp" optional type="tel" placeholder="(51) 99999-9999" />
</div>
<Field id="clientes" label="Quantos clientes?" as="select" options={["Até 50 clientes","50 a 150 clientes"]} />
<Field id="msg" label="Mensagem" optional as="textarea" placeholder="Conte um pouco…" />
```
