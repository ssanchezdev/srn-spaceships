// Simulamos la lógica de filtrado
const filterShips = (ships, searchText) => {
    if (!searchText) return ships;
    return ships.filter(item => {
        const itemData = item.faction ? item.faction.toUpperCase() : '';
        const textData = searchText.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
};

const mockShips = [
    { id: 1, name: 'X-Wing', faction: 'Rebels' },
    { id: 2, name: 'TIE Fighter', faction: 'Empire' },
    { id: 3, name: 'Slave I', faction: 'Bounty Hunters' }
];

describe('Lógica de Filtrado de Naves', () => {
    test('Debe retornar todas las naves si el texto está vacío', () => {
        const result = filterShips(mockShips, '');
        expect(result.length).toBe(3);
    });

    test('Debe filtrar correctamente por facción "Rebels"', () => {
        const result = filterShips(mockShips, 'Rebels');
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('X-Wing');
    });

    test('Debe ser insensible a mayúsculas/minúsculas (empire vs Empire)', () => {
        const result = filterShips(mockShips, 'empire');
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('TIE Fighter');
    });
});