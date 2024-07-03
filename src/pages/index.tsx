import { About } from "../components/about";
import { Form } from "../components/form";
import { Header } from "../components/header";
import { Interest } from "../components/interes";


export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Interest />
      <Form />
    </>
  );
}
