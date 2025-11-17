import Motive from "./motive";
import NowTime from "./Time";

export default function Header() {
  return (
    <>
      <NowTime />
      <Motive />
      <h2>My Todos 📆</h2>
    </>
  );
}
