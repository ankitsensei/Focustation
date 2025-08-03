type Props = {
  title: string
  onClick?: () => void;
  className?: string;
}

const Btn = ({ title, onClick, className }: Props) => {
  return (
    <button
      className={`border-2 w-30 py-2 rounded-md ${className}`}
      onClick={onClick}>
      {title}
    </button>
  )
}

export default Btn