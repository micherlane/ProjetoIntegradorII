export enum STATUS_TOUR {
    SCHEDULED = "SCHEDULED",
    IN_PROGRESS = "IN_PROGRESS",
    CONCLUDED = "CONCLUED",
    CANCELED = "CANCELED"
}

export function getNextStatus(currentStatus: STATUS_TOUR): STATUS_TOUR | undefined {
    const statusValues = Object.values(STATUS_TOUR);
    const currentIndex = statusValues.indexOf(currentStatus);

    if (currentIndex !== -1) {
        for (let i = currentIndex + 1; i < statusValues.length; i++) {
            if (statusValues[i] !== STATUS_TOUR.CANCELED) {
                return statusValues[i] as STATUS_TOUR;
            }
        }
    }

    return STATUS_TOUR.CONCLUDED; 
}
