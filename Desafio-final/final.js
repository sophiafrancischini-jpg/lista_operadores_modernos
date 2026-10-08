const usuario = {
  nome: "",
  idade: 0,
  endereco: null
};

console.log(usuario.nome || "Visitante");
console.log(usuario.nome ?? "Visitante");
console.log(usuario.idade || 18);
console.log(usuario.idade ?? 18);
console.log(usuario.endereco?.cidade);
console.log(usuario.endereco?.cidade ?? "Sem cidade");

// 1. console.log(usuario.nome || "Visitante"); -> "Visitante" (string vazia "" é falsy)

// 2. console.log(usuario.nome ?? "Visitante"); -> "" (string vazia "" não é null nem undefined)

// 3.  console.log(usuario.idade || 18); -> 18 (o número 0 é falsy)

// 4. console.log(usuario.idade ?? 18); -> 0 (o número 0 não é null nem undefined)

// 5. console.log(usuario.endereco?.cidade); -> undefined (endereco é null, então não acessa cidade)

// 6. console.log(usuario.endereco?.cidade ?? "Sem cidade"); -> "Sem cidade" (endereco é null, então não acessa cidade e cai no valor padrão)
