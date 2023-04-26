import "./App.css";
import { Header } from "./Components/Header/Header";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { PageLayout } from "./Pages/PageLayout/PageLayout";

export function App() {
  return (
    <PageLayout>
      <LandingPage />
    </PageLayout>
  );
}


