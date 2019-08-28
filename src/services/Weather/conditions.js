const list = [
  { id: 1000, day_text: 'Ensolarado', night_text: 'Céu limpo' },
  {
    id: 1003,
    day_text: 'Parcialmente nublado',
    night_text: 'Parcialmente nublado',
  },
  { id: 1006, day_text: 'Nublado', night_text: 'Nublado' },
  { id: 1009, day_text: 'Encoberto', night_text: 'Encoberto' },
  { id: 1030, day_text: 'Neblina', night_text: 'Neblina' },
  {
    id: 1063,
    day_text: 'Possibilidade de chuva irregular',
    night_text: 'Possibilidade de chuva irregular',
  },
  {
    id: 1066,
    day_text: 'Possibilidade de neve irregular',
    night_text: 'Possibilidade de neve irregular',
  },
  {
    id: 1069,
    day_text: 'Possibilidade de neve molhada irregular',
    night_text: 'Possibilidade de neve molhada irregular',
  },
  {
    id: 1072,
    day_text: 'Possibilidade de chuvisco gelado irregular',
    night_text: 'Possibilidade de chuvisco gelado irregular',
  },
  {
    id: 1087,
    day_text: 'Possibilidade de trovoada',
    night_text: 'Possibilidade de trovoada',
  },
  {
    id: 1114,
    day_text: 'Rajadas de vento com neve',
    night_text: 'Rajadas de vento com neve',
  },
  { id: 1117, day_text: 'Nevasca', night_text: 'Nevasca' },
  { id: 1135, day_text: 'Nevoeiro', night_text: 'Nevoeiro' },
  { id: 1147, day_text: 'Nevoeiro gelado', night_text: 'Nevoeiro gelado' },
  {
    id: 1150,
    day_text: 'Chuvisco irregular',
    night_text: 'Chuvisco irregular',
  },
  { id: 1153, day_text: 'Chuvisco', night_text: 'Chuvisco' },
  { id: 1168, day_text: 'Chuvisco gelado', night_text: 'Chuvisco gelado' },
  {
    id: 1171,
    day_text: 'Chuvisco forte gelado',
    night_text: 'Chuvisco forte gelado',
  },
  {
    id: 1180,
    day_text: 'Chuva fraca irregular',
    night_text: 'Chuva fraca irregular',
  },
  { id: 1183, day_text: 'Chuva fraca', night_text: 'Chuva fraca' },
  {
    id: 1186,
    day_text: 'Períodos de chuva moderada',
    night_text: 'Períodos de chuva moderada',
  },
  { id: 1189, day_text: 'Chuva moderada', night_text: 'Chuva moderada' },
  {
    id: 1192,
    day_text: 'Períodos de chuva forte',
    night_text: 'Períodos de chuva forte',
  },
  { id: 1195, day_text: 'Chuva forte', night_text: 'Chuva forte' },
  {
    id: 1198,
    day_text: 'Chuva fraca e gelada',
    night_text: 'Chuva fraca e gelada',
  },
  {
    id: 1201,
    day_text: 'Chuva gelada moderada ou forte',
    night_text: 'Chuva gelada moderada ou forte',
  },
  {
    id: 1204,
    day_text: 'Chuva fraca com neve',
    night_text: 'Chuva fraca com neve',
  },
  {
    id: 1207,
    day_text: 'Chuva forte ou moderada com neve',
    night_text: 'Chuva forte ou moderada com neve',
  },
  {
    id: 1210,
    day_text: 'Queda de neve irregular e fraca',
    night_text: 'Queda de neve irregular e fraca',
  },
  {
    id: 1213,
    day_text: 'Queda de neve fraca',
    night_text: 'Queda de neve fraca',
  },
  {
    id: 1216,
    day_text: 'Queda de neve moderada e irregular',
    night_text: 'Queda de neve moderada e irregular',
  },
  {
    id: 1219,
    day_text: 'Queda de neve moderada',
    night_text: 'Queda de neve moderada',
  },
  {
    id: 1222,
    day_text: 'Queda de neve forte e irregular',
    night_text: 'Queda de neve forte e irregular',
  },
  { id: 1225, day_text: 'Neve intensa', night_text: 'Neve intensa' },
  { id: 1237, day_text: 'Granizo', night_text: 'Granizo' },
  { id: 1240, day_text: 'Aguaceiros fracos', night_text: 'Aguaceiros fracos' },
  {
    id: 1243,
    day_text: 'Aguaceiros moderados ou fortes',
    night_text: 'Aguaceiros moderados ou fortes',
  },
  { id: 1246, day_text: 'Chuva torrencial', night_text: 'Chuva torrencial' },
  {
    id: 1249,
    day_text: 'Aguaceiros fracos com neve',
    night_text: 'Aguaceiros fracos com neve',
  },
  {
    id: 1252,
    day_text: 'Aguaceiros moderados ou fortes com neve',
    night_text: 'Aguaceiros moderados ou fortes com neve',
  },
  {
    id: 1255,
    day_text: 'Chuva fraca com neve',
    night_text: 'Chuva fraca com neve',
  },
  {
    id: 1258,
    day_text: 'Chuva moderada ou forte com neve',
    night_text: 'Chuva moderada ou forte com neve',
  },
  {
    id: 1261,
    day_text: 'Aguaceiros fracos com granizo',
    night_text: 'Aguaceiros fracos com granizo',
  },
  {
    id: 1264,
    day_text: 'Aguaceiros moderados ou fortes com granizo',
    night_text: 'Aguaceiros moderados ou fortes com granizo',
  },
  {
    id: 1273,
    day_text: 'Chuva fraca irregular com trovoada',
    night_text: 'Chuva fraca irregular com trovoada',
  },
  {
    id: 1276,
    day_text: 'Chuva moderada ou forte com trovoada',
    night_text: 'Chuva moderada ou forte com trovoada',
  },
  {
    id: 1279,
    day_text: 'Neve fraca irregular com trovoada',
    night_text: 'Neve fraca irregular com trovoada',
  },
  {
    id: 1282,
    day_text: 'Neve moderada ou forte com trovoada',
    night_text: 'Neve moderada ou forte com trovoada',
  },
];

export const getCondition = (id, isDay = true) => {
  const item = list.find(item => item.id === id);

  return isDay ? item.day_text : item.night_text;
};
