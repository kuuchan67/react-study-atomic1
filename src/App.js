import { Router } from "./router/Rounter";

import "./styles.css";

const user = {
  name: "なまえ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "test@example.com",
  phone: "000-0000-0000",
  company: {
    name: "株式会社テスト"
  },
  website: "https://test.com"
};

export default function App() {
  return <Router />;
}
