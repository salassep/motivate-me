import Emotion from "../components/Emotion";
import Motivation from "../components/Motivation";
import Action from "../components/Action";
import { getMotivation, changeMotivation } from "../services/gemini-services";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";

export default function Main() {
  const [motivation, setMotivation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [maxGroupSize, setMaxGroupSize] = useState<number>(6);
  const elementRef = useRef(null);

  const handleChangeEmotion = async (emotion: string) => {
    setLoading(true);
    const motivation = await getMotivation(emotion);
    setMotivation(motivation);
    setLoading(false);
  };

  const handleChangeMotivation = async () => {
    setLoading(true);
    const changedMotivation = await changeMotivation(motivation!);
    setMotivation(changedMotivation);
    setLoading(false);
  }

  const handleCopyMotivation = async () => {
    await navigator.clipboard.writeText(motivation!);
  };

  const handleDownload = () => {
    toPng(elementRef.current!, { cacheBust: false, width: 900, height: 900 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const emotions: string[] = [
    '😊 Happy',
    '😢 Sad',
    '😠 Angry',
    '😨 Afraid',
    '😰 Anxious',
    '😄 Joyful',
    '😒 Annoyed',
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
    '😭 Touched'
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1140){
        setMaxGroupSize(6);
      } else if (window.innerWidth > 960 && window.innerWidth <= 1140) {
        setMaxGroupSize(5);
      } else if (window.innerWidth > 768 && window.innerWidth <= 960) {
        setMaxGroupSize(4);
      } else if (window.innerWidth > 582 && window.innerWidth <= 768) {
        setMaxGroupSize(3);
      } else {
        setMaxGroupSize(2);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const groupedEmotions = [];

  for (let i = 0; i < emotions.length; i += maxGroupSize) {
    const groupSize:number = groupedEmotions.length % 2 === 0 ? maxGroupSize - 1 : maxGroupSize;
    groupedEmotions.push(emotions.slice(i, i + groupSize));
  }

  if (loading) {
    return (
      <main className="grow flex flex-col justify-center max-w-[1300px] mx-auto">
        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-primary" />
      </main>
    );
  }

  return (
    <main className="grow flex flex-col justify-center max-w-[1300px] mx-auto px-4 my-5">
      {
        motivation === null
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
            <div ref={elementRef} className="bg-white flex flex-col justify-center items-center">
              <Motivation qoute={motivation!} />
            </div>
            <Action 
              handleBackClick={() => setMotivation(null)}
              handleChangeClick={() => handleChangeMotivation()}
              handleCopyClick={() => handleCopyMotivation()}
              handleDownloadClick={() => handleDownload()}
              handleShareClick={() => window.open(`https://twitter.com/intent/tweet?text=${motivation}`, '_blank')}
            />
          </>
      }
    </main>
  )
}