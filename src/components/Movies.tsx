import styled from "@emotion/styled";
import Button from "./shared/Button";

const Container = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`

function Movies() {

  const getMovies = () => {
    console.log('get')
  }

  return (
    <Container>
      <Button text="Buscar" click={ () => getMovies() } />
    </Container>
  )
}

export default Movies
