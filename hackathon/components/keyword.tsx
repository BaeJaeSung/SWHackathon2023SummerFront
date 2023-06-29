interface KeywordProps {
  text: string
}

export default function Keyword({ text }:KeywordProps) {
  return (
    <div className="rounded-lg">{text}</div>
  )
}