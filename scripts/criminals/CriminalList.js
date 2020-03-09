import { useCriminals} from "./CriminalProvider.js";
import Criminals from "./Criminals.js"

const contentTarget = document.querySelector(".criminallist")

const CriminalList = () => {
    let CriminalObjectsArray = useCriminals()

    for (const CriminalObject of CriminalObjectsArray) {
        const CriminalHTMLRepresentation = Criminals(CriminalObject)
        contentTarget.innerHTML += CriminalHTMLRepresentation
    }
}

export default CriminalList