import { Navbar } from "../../ui"
import { HeroList } from "../components/HeroList"



export const DcPage = () => {
  return (
    <>
      <Navbar/>
      <h1>DcPage</h1>
      <hr />
      <HeroList publisher='DC Comics'/>
    </>
  )
}
