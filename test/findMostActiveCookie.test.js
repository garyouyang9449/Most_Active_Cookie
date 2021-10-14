const { findMostActiveCookie } = require('../src/findMostActiveCookie');
const mockCookies = 
'AtY0laUfhglK3lC7,2018-12-09T14:19:00+00:00\nSAZuXPGUrfbcn5UA,2018-12-09T10:13:00+00:00\n5UAVanZf6UtGyKVS,2018-12-09T07:25:00+00:00\nAtY0laUfhglK3lC7,2018-12-09T06:19:00+00:00\nSAZuXPGUrfbcn5UA,2018-12-08T22:03:00+00:00\n4sMM2LxV07bPJzwf,2018-12-08T21:30:00+00:00\nfbcn5UAVanZf6UtG,2018-12-08T09:30:00+00:00\nfbcn5UAVanZf6UtG,2018-12-08T09:31:00+00:00\n4sMM2LxV07bPJzwf,2018-12-07T23:30:00+00:00\n';

test('test valid input cookies', () => {
  expect(findMostActiveCookie(mockCookies, '2018-12-08')).toStrictEqual(['fbcn5UAVanZf6UtG']);
})