import stays from '../mocks/stays.json'

export function getCities()
{
    const cities = [...new Set(stays.map(stay => stay.city))];
    return cities;
}