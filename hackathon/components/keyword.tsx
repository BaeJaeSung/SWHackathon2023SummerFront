interface KeywordProps {
  text: string
}

export default function Keyword({ text }:KeywordProps) {
  return (
    <div className="mr-3 rounded-full bg-white px-3 py-1 text-center font-semibold	">
      {text}
    </div>
  )
}