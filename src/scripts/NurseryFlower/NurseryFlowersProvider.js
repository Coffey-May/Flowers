let nurseryFlowers = []

export const useNurseryFlowers = () => nurseryFlowers.slice()

export const getNurseryFlowers = () => fetch("http://localhost:8088/NurseryFlowers")
    .then(res => res.json())
    .then(parsedNurseryFlowers => nurseryFlowers = parsedNurseryFlowers)