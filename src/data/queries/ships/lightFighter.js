import { LightFighterType } from '../../types/ships';
import { Ship } from '../../models';

const lightFighter = {
  type: LightFighterType,
  async resolve({ planet }) {
    const where = { PlanetId: 1, techId: Ship.LIGHT_FIGHTER_ID };
    let ship = await Ship.findOne({ where });
    if (!ship) {
      ship = Ship.build(where);
    }
    return Object.assign(ship, {
      name: 'Light Fighter',
      description: 'This is the first fighting ship all emperors will build. ' +
      'The light fighter is an agile ship, but vulnerable on its own. ' +
      'In mass numbers, they can become a great threat to any empire. ' +
      'They are the first to accompany small and large cargoes to ' +
      'hostile planets with minor defences.',
      longDescription: 'This is the first fighting ship all emperors will build. ' +
      'The light fighter is an agile ship, but vulnerable when it is on its own. ' +
      'In mass numbers, they can become a great threat to any empire. ' +
      'They are the first to accompany small and large cargoes to ' +
      'hostile planets with minor defences.',
    });
  },
};

export default lightFighter;
