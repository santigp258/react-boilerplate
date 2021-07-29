import { useTest } from "./global_stores/UseTest";

function App() {
  const Hello = useTest((state) => state.message);
  return (
    <main className="bg-black text-white w-full h-full flex justify-center items-center">
      <h1>Message: {Hello} </h1>
    </main>
  );
}

export default App;
