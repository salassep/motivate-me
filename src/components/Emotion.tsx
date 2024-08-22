export default function Emotion({ name, handleClick }: { name: string, handleClick: () => void }) {
  return (
    <button onClick={handleClick} className="text-xl bg-primary w-max p-4 rounded-xl cursor-pointer hover:bg-primary-dark">
      {name}
    </button>
  )
}