import { useEffect, useState } from "react";
import TypeSelector from "./components/typeSelector";
import { getApi, getApiFetch, getApiFullUrl } from "./services/api.service";
import {
  INamePokemon,
  IPokemon,
  IResponsPokemonTypes,
  IResponsePokemon,
} from "./interface/pokemon.interface";
import Table from "./components/table";

function App() {
  const [listTypes, setListTypes] = useState<Array<IPokemon>>([]);
  const [listPokemon, setListPokemon] = useState<Array<INamePokemon>>([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    getApi<IResponsPokemonTypes>("/type").then((data) => {
      setListTypes(data.data.results);
    });

    // getApiFetch("/type").then((data) => {
    //   return data.json()
    // }).then((data) => {
    //   console.log('Fetch', data)
    // })
  }, []);

  useEffect(() => {
    console.log("selectedType", selectedType);
    if (!selectedType) return;

    getApiFullUrl<IResponsePokemon>(selectedType).then((response) => {
      setListPokemon(response.data.pokemon);
    });
  }, [selectedType]);

  return (
    <div className="App">
      <TypeSelector types={listTypes} setSelectedType={setSelectedType} />

      <Table listPokemon={listPokemon} />
    </div>
  );
}

export default App;
