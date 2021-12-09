import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      {/* <img src="/images/IMG_2825.JPG" alt="logo" style={{ width: "200px" }} /> */}
      <Header as="h1">JEON</Header>
      <Gnb />
    </div>
  );
}
