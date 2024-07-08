function randomNumber(min = 1, max = 10000) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function handle(req: Request, res: any) {
  res.status(200).json([
    { id: randomNumber(), nome: "caneta", preco: 2.2 },
    { id: randomNumber(), nome: "lapis", preco: 1.9 },
    { id: randomNumber(), nome: "borracha", preco: 1.25 },
    { id: randomNumber(), nome: "piloto", preco: 5.6 },
  ]);
}
