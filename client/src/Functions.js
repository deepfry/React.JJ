const states = ['Sun', 'Sunset', 'Moonrise', 'Moon', 'Moonset', 'Sunrise']
var i = 0;
export function updateState(state){
  i++
  return states[i];
}