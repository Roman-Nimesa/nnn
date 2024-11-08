function openPlanet(planet) {
    const planetsInfo = {
        mercury: 'https://solarsystem.nasa.gov/planets/mercury/overview/',
        venus: 'https://solarsystem.nasa.gov/planets/venus/overview/',
        earth: 'https://solarsystem.nasa.gov/planets/earth/overview/',
        mars: 'https://solarsystem.nasa.gov/planets/mars/overview/',
        jupiter: 'https://solarsystem.nasa.gov/planets/jupiter/overview/',
        saturn: 'https://solarsystem.nasa.gov/planets/saturn/overview/',
        uranus: 'https://solarsystem.nasa.gov/planets/uranus/overview/',
        neptune: 'https://solarsystem.nasa.gov/planets/neptune/overview/'
    };

    if (planet in planetsInfo) {
        window.open(planetsInfo[planet], '_blank');
    } else {
        alert('Информация о планете не найдена.');
    }
}