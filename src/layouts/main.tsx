import Emotion from "../components/Emotion";
import Motivation from "../components/Motivation";
import Action from "../components/Action";

export default function Main() {
  const data: string[] = [
    '😊 Happy',
    '😢 Sad',
    '😠 Angry',
    '😨 Afraid',
    '😰 Anxious',
    '😄 Joyful',
    '😒 Annoyed',
    '😤 Offended',
    '😞 Depressed',
    '😔 Longing',
    '🙏 Grateful',
    '😕 Confused',
    '😔 Disappointed',
    '😃 Delighted',
    '😲 Amazed',
    '😒 Jealous',
    '😌 Proud',
    '😳 Embarrassed',
    '😏 Satisfied',
    '😭 Touched'
  ];

  return (
    <main className="grow flex flex-col justify-center max-w-[1300px] mx-auto">
      {/* <h2 className="text-3xl">How are you feeling ?</h2> */}
      {/* <ul className="mt-10 flex justify-center gap-2 flex-wrap">
        {data.map((item, index) => (
          <li key={index}>
            <Emotion name={item} />
          </li>
        ))}
      </ul> */}
      <Motivation />
      <Action />
    </main>
  )
}