/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
//Gets the data to work on
 import { useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where HTML is rendered
const contentTarget = document.querySelector(".filters__crime")
// Set class where event hub is listening
const eventHub = document.querySelector(".container")
// Create event listener looking for the change event
contentTarget.addEventListener("change", changeEvent => {
// Get the specific box operated on by id and select the id
    if (changeEvent.target.id === "crimeSelect") {
// Assign the id clicked to this variable
        const theCrimeThatWasChosen = changeEvent.target.value
// Create custom event 
        const crimeChosenEvent = new CustomEvent("crimeChosen", {
// Export the results of the custom event    
            detail: {
                chosenCrime: theCrimeThatWasChosen
            }
        })
// Send the event to the Hub which is listening
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})

const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    const render = (convictionsCollection) => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(singleConviction => {
                        return `<option>${singleConviction.name}</option>`
                    })
                }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect





