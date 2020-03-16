//import { getOfficers } from "./officers/OfficerProvider.js"
//getOfficers()

import { getCriminals } from "./criminals/CriminalProvider.js"
import {CriminalList} from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import NoteForm from "./notes/NoteForm.js"
getCriminals().then(CriminalList)
getConvictions().then(ConvictionSelect)
NoteForm()
