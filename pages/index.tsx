import { GetServerSideProps } from "next"
import { 
  Sidebar, 
  AplicationArea,
  BackgroundAnimation,
  Character,
  ConfigureScreen,
  Selector,
} from "../components/HomeAplication"

export default function Home() {

  return (
    <ConfigureScreen>
      <BackgroundAnimation/>
      <AplicationArea>
        <Sidebar/>
        <Character/>
        <Selector/>
      </AplicationArea>
    </ConfigureScreen>
  )
}

export const getServerSideProps:GetServerSideProps = async(ctx) => {

  return {
    props: {}
  }
}
