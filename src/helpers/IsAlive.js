export const IsAlive = (status) => {
    if (!status?.died) {
        return "Yes"
    }
    else if (status?.died) {
        return "No died" + status?.died
    }
    else if (status?.died === undefined) {
        console.log(status, 'status')
        return "Unknown"
    }
    else if (!status?.born) {
        return "no"
    }
}