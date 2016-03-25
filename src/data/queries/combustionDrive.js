import CombustionDriveType from '../types/CombustionDriveType';
import laserTech from './laserTech';

const combustionDrive = {
  type: CombustionDriveType,
  resolve({ user }) {
    const level = 14; // TODO
    return {
      id: 999, // TODO
      name: 'Combustion Drive',
      description: 'The development of this drive makes some ships faster, ' +
      'although each level increases speed by only 10% of the base value.',
      longDescription: 'The Combustion Drive is the oldest of technologies, ' +
      'but is still in use. With the Combustion Drive, ' +
      'exhaust is formed from propellants carried within the ship prior to use. ' +
      'In a closed chamber, ' +
      'the pressures are equal in each direction and no acceleration occurs. ' +
      'If an opening is provided at the bottom of the chamber then the pressure is no longer ' +
      'opposed on that side. ' +
      'The remaining pressure gives a resultant thrust in the side opposite the opening, ' +
      'which propels the ship forward by expelling the exhaust rearwards at extreme high speed.' +
      '' + // TODO check is newline
      'With each level of the Combustion Drive developed, ' +
      'the speed of small and large cargo ships, ' +
      'light fighters, recyclers, and espionage probes are increased by 10%.',
      level,
      speedFactor: 1 + 0.1 * level,
      requirements: [
        { technology: laserTech.resolve({ user }), level: 1 }, // TODO check
      ],
    };
  },
};

export default combustionDrive;
