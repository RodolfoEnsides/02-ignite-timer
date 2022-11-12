import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <label htmlFor="">Vou trabalhar em</label>
        <input id="task" />

        <label htmlFor="">Durante</label>
        <input id="minutesAmount" type="number" />

        <span>minutos.</span>
      </form>
    </HomeContainer>
  )
}
