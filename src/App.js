import { BrowserRouter } from 'react-router-dom';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { HeaderOnly } from './components/templates/HeaderOnly';
import './styles.css';

const user = {
  name: "たかし", 
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234#exapmle.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}