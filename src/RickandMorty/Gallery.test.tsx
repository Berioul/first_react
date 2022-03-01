import {render, waitFor, screen, fireEvent} from '@testing-library/react';
import Gallery from "./Gallery";
import {Character} from "./model";

test('that response is handled', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                results: [{
                    "id": 1,
                    "name": "Rick Sanchez",
                    "status": "Alive",
                    "species": "Human",
                },{
                    "id": 2,
                    "name": "Morty Smith",
                    "status": "Alive",
                    "species": "Human",}]
            })
        } as Response);
    });
     render(<Gallery/>);


    await waitFor(() => {
        expect(screen.getAllByTestId('GalleryItem').length).toEqual(2)
    })

const Suchbegriff =screen.getByTestId('Suchbegriff') as HTMLBodyElement;
fireEvent.change(Suchbegriff,{target:{value:'Rick'}});

await waitFor(() => {
    expect(screen.getAllByTestId('GalleryItem').length).toEqual(1)
})
});
