import { GetServerSideProps } from "next"
import { api } from "../services/api"

export default function Home() {
  return (
    <div>
      <h1>Contrata ai pow, site mó legal</h1>
    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async(ctx) => {

  const { data } = await api.get("characters")

  return {
    props: {}
  }
}
