import React from 'react'

const ComponenteDisco = ()=> {
  const dummydata = [

    {
        "id": 1,
        "artista" : "artista1",
        "tituo" : "el mejor disco",
        "duracion":30,
        "cod": "abc 213"
   
    },
     {
       "id": 2,
       "artista" : "artista2",
       "tituo" : "el mejor disco",
       "duracion":30,
       "cod": "abc 213"
   
    },
    {
       "id": 3,
       "artista" : "artista3",
       "tituo" : "el mejor disco",
       "duracion":30,
       "cod": "abc 213"
   
    }




  ]
  


    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Artista</th>
                    <th>Titulo</th>
                    <th>Duracion</th>    
                    <th>codigo</th>
                </tr>    
            </thead>    
        <tbody>
            {
                
            }
        </tbody>
        </table>
    </div>
    )
}
export default ComponenteDisco;
