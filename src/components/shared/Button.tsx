import styled from "@emotion/styled";

const ButtonLib = styled.button`
  background-color: black;
  color: #fff;
  margin-top: 3rem;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 6px;
`

function Button (props: any) {
  const {text, click} = props

  return (
    <>
      <ButtonLib onClick={click}>
        {text}
      </ButtonLib>
    </>
  )
}

export default Button
