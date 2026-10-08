const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// O operador || considera qualquer valor falsy (0, "", false, null, undefined) para usar o padrão da direita. Já o operador ?? só considera nullish (null ou undefined). Por isso, 0 || 10 resulta em 10, enquanto 0 ?? 10 resulta em 0.
