//import { getOfficers } from "./officers/OfficerProvider.js"
//getOfficers()

import { getCriminals } from "./criminals/CriminalProvider.js"
import criminalList from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
getCriminals().then(criminalList)
getConvictions().then(ConvictionSelect)
