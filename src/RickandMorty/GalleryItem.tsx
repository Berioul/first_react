
import { Character } from "./model";
import './GalleryItem.css';
interface GalleryItemProps {
    character: Character;
}
export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div  className="gallery-item">
    <div><img src={props.character.imageUrl} /></div>
            <div><img src={props.character.image} /></div>


                    <li data-testid='the-character'>Name: { props.character.name }</li>

        </div>)
}



