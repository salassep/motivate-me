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

  const groupedEmotions = [];
  let groupSize = 7;

  for (let i = 0; i < emotions.length; i += groupSize) {
    groupSize = groupedEmotions.length % 2 === 0 ? 6 : 7;
    groupedEmotions.push(emotions.slice(i, i + groupSize));
  }

  return (
    <main className="grow flex flex-col justify-center max-w-[1300px] mx-auto">
      {
        motivation === null && loading
        ? <>
            <h2 className="text-3xl">How are you feeling ?</h2>
            <div className="mt-10 space-y-2">
              {
                groupedEmotions.map((group, groupIndex) => (
                  <div key={groupIndex} className="flex gap-2 justify-center flex-wrap">
                    {
                      group.map((emotion, index) => (
                        <Emotion 
                          key={index} 
                          name={emotion} 
                          handleClick={() => handleChangeEmotion(emotion.split(' ')[1])} 
                        />
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </>
        : <>
            <Motivation qoute={motivation!} />
            <Action />
          </>
      }
    </main>
  )
}