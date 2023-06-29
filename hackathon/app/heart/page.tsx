import ListItem from '@/components/listItem'

export default function HeartPage() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="cursor-pointer rounded-full bg-[#C467EF] px-5 py-2 text-center font-bold text-white">
          나의 지원현황
        </div>
        <div className="cursor-pointer rounded-full px-5 py-2 text-center font-bold hover:bg-gray-200">
          내가 받은 Like
        </div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  )
}
