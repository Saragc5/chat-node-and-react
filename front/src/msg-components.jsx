import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  margin-top:0;
  margin-bottom:3rem;
`;

const UlMessage = styled.ul`
    min-width:800px;
    max-width:1200px;
    max-height:auto;
    margin:10px auto;
    list-style:none;
    display:flex;
    flex-direction: column;
    gap:5px
`;

const LiMessage = styled.li`
    background-color: rgb(217, 176, 225);
    border: 2px solid doggerblue;
    padding: 10px 20px;
`;

const InputMessage = styled.input`
    min-width: 600px;
    max-width:700px;
    height:40px;
    border-radius:10px;
    background-color:rgb(221, 196, 226);

`;

const ButtonSend = styled.button`
    color: #BF4F74;
    background-color:rgb(221, 196, 226);
    margin:1rem;

`;

export {
  Title, UlMessage, LiMessage, InputMessage, ButtonSend
}