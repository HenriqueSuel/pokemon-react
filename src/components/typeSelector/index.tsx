import { IPokemon } from "../../interface/pokemon.interface";

interface IProps {
  types: Array<IPokemon>;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}

const TypeSelector = ({ types, setSelectedType }: IProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="container flex justify-between m-auto">
        <h1 className="text-xl font-bold">Pokémon React</h1>

        <select
          className="bg-blue-500 py-2 px-4"
          onChange={(event) => handleSelectChange(event)}
        >
          <option disabled selected value="">
            Selecione um tipo
          </option>

          {types.map((item) => (
            <option key={item.name} value={item.url}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TypeSelector;
