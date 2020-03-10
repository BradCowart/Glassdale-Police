import { useConvictions} from "./ConvictionProvider.js";
import Convictions from "./Convictions.js"

const contentTarget = document.querySelector(".Convictionlist")

const ConvictionList = () => {
    let ConvictionObjectsArray = useConvictions()

    for (const ConvictionObject of ConvictionObjectsArray) {
        const ConvictionHTMLRepresentation = Convictions(ConvictionObject)
        contentTarget.innerHTML += ConvictionHTMLRepresentation
    }
}

export default ConvictionList