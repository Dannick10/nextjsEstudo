export const getStaticProps = async () => {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos,
    },
  };
};

const estatico3 = (props: any) => {
  const render = () => {
    return props.produtos.map((product: any) => (
      <>
        <div className="p-2 flex gap-2 border-lime-500 border-2 rounded-lg">
          <p>{product.id}</p>
          <p>{product.nome}</p>
          <p>{product.preco} R$</p>
        </div>
      </>
    ));
  };

  return (
    <div className="flex items-center flex-col h-screen justify-around">
      <h1 className="text-4xl text-center">Estático #4</h1>
      {render()}
    </div>
  );
};

export default estatico3;
