import { useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";
// Selecting the classes where the data will appear
const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

//Set up a listener for the crime
eventHub.addEventListener("crimeChosen", event => {
    // Filter the list of criminals who committed the crime

    // Get the criminals from the data source
    const criminals = useCriminals()

    // Get the crime this comes from ConvictionSelect
    const theCrimeThatWasChosen = event.detail.chosenCrime

    // Review criminals and determine if each one = selected crime
    const guiltyCriminals = criminals.filter(criminal => {
    // testing if the criminal = the crime if so return true    
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false
    })

    // Clear inner HTML of the criminal list
    contentTarget.innerHTML = ""

    // Build it up again
    for (const singleCriminal of guiltyCriminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
})

// Make the function available for main.js
export const CriminalList = () => {
// Assign the data to variable ???
    const criminals = useCriminals()
// ????????
    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}