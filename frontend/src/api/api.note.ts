import {Note} from "../interfaces/interface.note"
const BEUrl = 'http://localhost:5000/notes/';

//get all notes with/withwout id
export async function getAllNotes(id:string): Promise<Response>{
    const allNotes = await fetch(BEUrl + id, {
        method: 'GET',
        // headers:{
		// 	"Content-Type" : "application/json",
		// 	"Accept": "application/json",
        // }
    });
    return allNotes;
}

// Add note
export async function addNote(data:Note){
    let toDo = await fetch(BEUrl,{
        method: 'POST',
        // headers:{
        //     "Content-Type": "application/json",
        //     "Accept": "application/json",
        // },
        body: JSON.stringify(data),
    })

    return toDo;
}

// Edit note
export async function editNote(id:string, data:Note){
    let edit = await fetch(BEUrl + id,{
        method: 'PUT',
        // headers:{
        //     "Content-type": "application/json",
        //     "Accept": "application/json",           
        // },
        body: JSON.stringify(data),
    })

    return edit;
}
//Delete note
export async function deleteNote(id:string){
    let del = await fetch(BEUrl+id, {
        method: 'DELETE',
        // headers:{
        //     "Content-type": "application/json",
        //     "Accept": "application/json",           
        // },
    })
    return del;
}
