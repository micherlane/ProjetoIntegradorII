export enum STATUS_TOUR {
    SCHEDULED = "SCHEDULED",
    IN_PROGRESS = "IN_PROGRESS",
    CONCLUDED = "CONCLUDED",
    CANCELED = "CANCELED"
}

export function getNextStatus(currentStatus: STATUS_TOUR): STATUS_TOUR {
    const statusValues = Object.values(STATUS_TOUR);
    const currentIndex = statusValues.indexOf(currentStatus);

    if (currentIndex !== -1 && currentIndex < statusValues.length - 1) {
        for (let i = currentIndex + 1; i < statusValues.length; i++) {
            if (statusValues[i] !== STATUS_TOUR.CANCELED) {
                return statusValues[i] as STATUS_TOUR;
            }
        }
    }

    return STATUS_TOUR.CONCLUDED;
}

