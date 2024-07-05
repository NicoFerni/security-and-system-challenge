import { About } from "../components/about";
import { Header } from "../components/header";
import {Interest} from "../components/interest";
import Form from "../components/form";

export default function Home() {

  const onSubmit = (data: FormData) => {
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <>
      <Header />
      <About />
      <Interest/>
      <Form/>
    </>
  );
}
