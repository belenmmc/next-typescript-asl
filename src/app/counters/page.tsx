import Counter from '@/components/Counter'

export default function Page() {
  return (
    <div className="flex flex-col gap-3 p-10">
      <Counter step={1} id={1} />
      <Counter step={1} id={2} />
    </div>
  )
}
