import { render, screen } from '@testing-library/react';
import GalleryItem from "./GalleryItem";

test('this character is correct',()=>{
 const character = {name:'oualid',status:'oua',id:'bla',image:'image',imageUrl:'url'}
 const {getByTestId} = render(<GalleryItem character={character}/>);
 expect(getByTestId('the-character').textContent).toEqual('Name: oualid');

});