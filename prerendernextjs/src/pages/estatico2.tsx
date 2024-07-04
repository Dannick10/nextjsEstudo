

export const getStaticProps = () => {
    return {
        props: {
            numero: Math.random()
        }
    }
}

type Props = {
    numero: number
}

const estatico2 = (props: Props) => {
  return (
    <div>
        <h1 className='text-4xl text-center'>Estático #2</h1>
        <h2>{props.numero}</h2>
    </div>
  )
}

export default estatico2