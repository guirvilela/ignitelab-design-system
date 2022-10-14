import "./styles/global.css";
import { Text } from "./components/Text/Text";

export function App() {
  return (
    <div className="App">
      <h1 className="font-bold text-2xl text-cyan-500">Heloo</h1>

      <button className="bg-cyan-500 font-medium px-4 py-2 rounded text-gray-900 hover:bg-cyan-300">
        Enviar
      </button>

      <Text />
    </div>
  );
}
