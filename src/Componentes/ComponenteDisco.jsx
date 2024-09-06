import React from 'react';

const ComponenteDisco = () => {
  const dummydata = [
    {
        "id": 1,
        "artista": "artista1",
        "titulo": "el mejor disco",
        "duracion": 30,
        "cod": "abc 213"
    },
    {
       "id": 2,
       "artista": "artista2",
       "titulo": "el mejor disco",
       "duracion": 30,
       "cod": "abc 213"
    },
    {
       "id": 3,
       "artista": "artista3",
       "titulo": "el mejor disco",
       "duracion": 30,
       "cod": "abc 213"
    }
  ];

  return (
    <div>
        <table >
            <thead>
                <tr>
                    <th>id</th>
                    <th>Artista</th>
                    <th>Titulo</th>
                    <th>Duracion</th>    
                    <th>Codigo</th>
                </tr>    
            </thead>    
            <tbody>
                {dummydata.map(disco => (
                    <tr key={disco.id}>
                        <td>{disco.id}</td>
                        <td>{disco.artista}</td>
                        <td>{disco.titulo}</td>
                        <td>{disco.duracion}</td>
                        <td>{disco.cod}</td>
                    </tr>
                )
             )
            }
            </tbody>
        </table>
    </div>
  );
};

export default ComponenteDisco;
