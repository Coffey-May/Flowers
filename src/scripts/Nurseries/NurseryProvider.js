let nurserys = []

export const useNurserys = () => nurserys.slice()

export const getNurserys = () => fetch("http://localhost:8088/Nurserys")
    .then(res => res.json())
    .then(parsedNurserys => nurserys = parsedNurserys)