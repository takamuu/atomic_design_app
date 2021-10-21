import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
// import { useContext } from "react";
import { userState } from "../../store/userState";
import axios from "axios";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    }).catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/3").then((res) => {
      console.log(res.data);
    }).catch((err) => console.log(err));
  };


  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <TestContainer>
        <div className= "App">
          <button onClick={onClickUsers}>users</button>
          <button onClick={onClickUser1}>id=1のusers</button>
        </div>
      </TestContainer>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`;

const TestContainer = styled.div`
  text-align: left;
`;