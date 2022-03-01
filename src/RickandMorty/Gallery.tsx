import GalleryItem from './GalleryItem';
import data from './rickAndMorty.json';
import './Galery.css';

import { Character, Response as ResponseBody} from "./model";
import {useEffect, useState} from "react";
import {ifError} from "assert";
export default function Gallery() {


    const [searchName, setSearchName] = useState('');
    const [items, setItems] = useState([] as Array<Character>);
    const [pages, setPages]= useState('https://rickandmortyapi.com/api/character')

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')

            .then(response => response.json())
            .then((responseBody: ResponseBody) =>  responseBody.results)
            .then(filteredCharacters => setItems(filteredCharacters));
    }, []);

   /* useState(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then((responseBody: ResponseBody) =>  responseBody.results)
            .then(filteredCharacters => setItems(filteredCharacters))
    })

    */


const getPages = () =>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(response =>{
                return response.json();
            } )
            .then()
}

    return (
        <div id="gallery-wrapper">

            <div id="input-wrapper">
                <input type='text' placeholder='Suchbegriff' data-testid = 'Suchbegriff' value={searchName} onChange={ev => setSearchName(ev.target.value)} />
            </div>

            <div id="gallery">
                {
                    items
                        .filter(character => character.name.toLowerCase().includes(searchName.toLowerCase()))
                        .map(character => <div key={character.id} data-testid = 'GalleryItem'><GalleryItem  character={character} /></div>)
                }
            </div>
        </div>
    );
    
    
}




