function distanceFromHqInBlocks(location){
    return Math.abs(location-42);
}

function distanceFromHqInFeet(location){
    let blocks = distanceFromHqInBlocks(location);
    return blocks*264;
}

function distanceTravelledInFeet(start, destination){
    let blocks = Math.abs(start-destination);
    return blocks*264;
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    if (feet<=400){
        return 0;
    } else if (feet<=2000){
        return (feet-400) * .02;
    } else if (feet<=2500){
        return 25;
    } else{
        return 'cannot travel that far';
    }
}