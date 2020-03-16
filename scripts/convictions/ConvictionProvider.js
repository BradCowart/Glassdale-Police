// Create array to hold conviction types
let conviction = []
// Make this data available to the app
export const useConvictions = () => {
    return conviction.slice()
}
// get the data from the API
export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
// then put in form to use        
        .then(response => response.json())
        .then(
            parsedConvictions => {
// just display the results in console                
                console.table(parsedConvictions)
// ??????
                conviction = parsedConvictions
            }
        )
}