export const Criminal = (criminal) => {
    return `
        <div class="criminal">
          <div>${criminal.name}</div>
          <div>${criminal.age}</div>
          <div>${criminal.conviction}</div>
          <div>${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
          <div>${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        </div>
          <div><br><br></div>
        </div>
    `
}
