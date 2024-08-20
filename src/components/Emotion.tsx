export default function Emotion({ name }: { name: string }) {
  return (
    <div className="text-xl bg-primary w-max p-4 rounded-xl cursor-pointer hover:bg-primary-dark">
      {name}
    </div>
  )
}