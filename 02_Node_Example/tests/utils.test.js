const { tambah, kurang } = require('../src/utils');

test('menjumlahkan dua angka', () => {
    expect(tambah(2, 3)).toBe(5);
});

test('mengurangkan dua angka', () => {
    expect(kurang(5, 3)).toBe(2);
});
