export default function Emotion({ name, handleClick }: { name: string, handleClick: () => void }) {
  return (
    <button 
      onClick={handleClick} 
      className="text-xl bg-primary p-4 rounded-xl cursor-pointer hover:bg-primary-dark w-full min-[392px]:w-[178px]"
    >
      {name}
    </button>
  )
}