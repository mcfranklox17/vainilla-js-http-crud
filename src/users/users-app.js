import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersApp = async(element) => {
    //element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    
    //console.log(usersStore.getUsers());

    renderTable(element);
    renderButtons( element );
}