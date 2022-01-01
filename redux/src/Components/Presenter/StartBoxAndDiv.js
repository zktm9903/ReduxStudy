import styled from "styled-components"

const BackDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
`

const StartPropsBox = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:40%;
    height: 90%;
    border:solid 2px black;
    margin:5px;
`

const StartReduxBox = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:40%;
    height: 90%;
    border:solid 2px black;
    margin:5px;
`

export { BackDiv, StartPropsBox, StartReduxBox };