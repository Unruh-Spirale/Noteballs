import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ullam in labore obcaecati quis vitae, ea qui quos illo dicta nisi deleniti! Nisi, aliquam necessitatibus suscipit odio excepturi ex recusandae.'
                },
                {
                    id: 'id2',
                    content: 'This is a shorter note! Woo!'
                }
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime();
            let id = currentDate.toString();

            let note = {
                id,
                content: newNoteContent
            }
            this.notes.unshift(note)
        }
    }
})