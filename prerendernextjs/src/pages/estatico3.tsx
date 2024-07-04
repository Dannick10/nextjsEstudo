export const getStaticProps = () => {
  return {
    revalidate: 7,
    props: {
      numero: Math.random(),
    },
  };
};

type Props = {
  numero: number;
};

const estatico3 = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl text-center">Estático #3</h1>
      <h2>{props.numero}</h2>
    </div>
  );
};

export default estatico3;
