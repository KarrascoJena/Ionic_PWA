export const initState = {
  fullName: '',
  gender: 'Male',
  birthday: '1988-04-12T00:00:42.793Z',
  contactRelationshipTypeId: '',
  city: '',
  image: '',
  travelRadius: 0,
  events: {
    weekend: { isActive: '0' },
    birthday: { isActive: '1' },
    chrismas: { isActive: '0' },
    vacation: { isActive: '0'},
    valentine: { isActive: '0' },
    parentsday: { isActive: '0' },
    anniversary: { date: '0000-00-00', isActive: '0' }
  },
  interests: {
    fly_fall: { rating: '0' },
    wind_water: { rating: '0' },
    dinner_culture: { rating: '0' },
    wellness_beauty: { rating: '0' },
    culture_creative: { rating: '0' },
    driving_motosport: { rating: '0' },
    sport_action_nature: { rating: '0' },
    vacation_overnightstay: { rating: '0' }
  },
  characteristics: {
    sociality: { rating: '0' },
    personality: { rating: '0' },
    fitness_level: { rating: '0' }
  },
  connections: {
    email: { address: '' },
    phone: { number: '' },
    facebook: { username: '' },
    whatsapp: { number: '' },
    instagram: { username: '' }
  }
}