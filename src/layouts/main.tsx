import Emotion from "../components/Emotion"

export default function Main() {
  return (
    <main className="grow flex flex-col justify-center">
      <h2 className="text-3xl">How are you feeling ?</h2>
      <ul className="mt-10 flex justify-center gap-2 flex-wrap">
        <li>
          <Emotion />
        </li>
      </ul>
    </main>
  )
}