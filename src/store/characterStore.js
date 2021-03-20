
export function createCharacterStore(){
    console.log("CREATING CHARACTERS STORE:")

    return {
        characters: [],
        
        addCharacter(characterObject){
            
            var path = characterObject.url.split('/');
            const characterID = path[5];
            console.log("path", characterID);

            // Check if object with given ID ( character ID ) is stored in the 
            var isFaved = false
            const arrayOfFavedCharacters = JSON.parse(localStorage.getItem('faved_characters'));
            if(arrayOfFavedCharacters !== null && arrayOfFavedCharacters.length > 0){

                
                arrayOfFavedCharacters.forEach(id => {
                    if(id === characterObject.characterID){
                        isFaved = true
                    }
                })
            }else{
                localStorage.setItem('faved_characters', JSON.stringify([]));
            }

            this.characters.push({
                id: characterID, // just so we have a randomize ID. Might be useful later on. 
                birth_year: characterObject.birth_year, 
                eye_color: characterObject.eye_color,
                gender: characterObject.gender,
                skin_color: characterObject.skin_color,
                name:characterObject.name,
                url: characterObject.url,   
                isFaved: isFaved
            })
        },

        // Update the selection for FAVED films.
        // This function will update the object we store in memory
        // and also the localStore array so the selection is avaible
        // during app reload.
        changeFavedForACharacterID(id){

            const character = this.characters.find(x => x.urlID === id)
            const characterIndex = this.characters.findIndex(x => x.urlID === id)
            
            if(character.isFaved){
                
                var arrayOfFavedCharacters = JSON.parse(localStorage.getItem('faved_characters'))
                console.log(arrayOfFavedCharacters)
                let favedIndex = arrayOfFavedCharacters.findIndex(x => x === id)
                arrayOfFavedCharacters.splice(favedIndex, 1)
                localStorage.setItem('faved_characters', JSON.stringify(arrayOfFavedCharacters))
            
            }else{

                var arrayOfFavedCharacters = JSON.parse(localStorage.getItem('faved_characters'))
                arrayOfFavedCharacters.push(id)
                localStorage.setItem('faved_characters', JSON.stringify(arrayOfFavedCharacters))
            }
            
            character.isFaved = !character.isFaved
            this.characters[characterIndex] = character

        },
    }
}