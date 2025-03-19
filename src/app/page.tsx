import StatusLabel, { Status } from "./components/active-label";


export default function Home() {
  return (
    <main>
      <h1 className="text-m">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Action</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>


    </main>
  )
}
