// Calcula o frete com base no valor total da compra e na distância em km.
function calcularFrete(valorCompra, distanciaKm) {
	if (valorCompra < 0 || distanciaKm < 0) {
		throw new Error("O valor da compra e a distância não podem ser negativos.");
	}

	// Frete grátis para compras a partir de R$ 200.
	if (valorCompra >= 200) return 0;

	const taxaBase = 8;
	const valorPorKm = 1.5;
	return taxaBase + distanciaKm * valorPorKm;
}

// Exemplo de uso:
const frete = calcularFrete(120, 10);
console.log(`Frete: R$ ${frete.toFixed(2)}`);
