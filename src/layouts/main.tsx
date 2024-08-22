import Emotion from "../components/Emotion";
import Motivation from "../components/Motivation";
import Action from "../components/Action";
import { getMotivation } from "../services/gemini-services";
import { useState } from "react";

export default function Main() {
  const [motivation, setMotivation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleChangeEmotion = async (emotion: string) => {
    const motivation = await getMotivation(emotion);
    setMotivation(motivation);
    setLoading(false);
  };

  const emotions: string[] = [
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
      {
        motivation === null && loading
        ? <>
            <h2 className="text-3xl">How are you feeling ?</h2>
            <ul className="mt-10 flex justify-center gap-2 flex-wrap">
              { 
                emotions.map((emotion, index) => (
                  <li key={index}>
                    <Emotion handleClick={() => handleChangeEmotion(emotion)} name={emotion} />
                  </li>
                ))
              }
            </ul>
          </>
        : <>
            <Motivation qoute={motivation!} />
            <Action />
          </>
      }
    </main>
  )
}