type Props = {
  title: string
  onClick?: () => void;
}

const Btn = ({ title, onClick }: Props) => {
  return (
    <button
      className="border-2 border-zinc-600 w-30 py-2 rounded-md"
      onClick={onClick}>
      {title}
    </button>
  )
}

export default Btn