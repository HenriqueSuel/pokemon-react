import { INamePokemon } from "../../interface/pokemon.interface";

interface IProps {
  listPokemon: Array<INamePokemon>;
}

const Table = ({ listPokemon }: IProps) => {
  return (
    <div className="container m-auto">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {listPokemon.map((item) => {
            return (
              <tr>
                <td>{item.pokemon.name}</td>
                <td>
                  <button>Saber mais</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
