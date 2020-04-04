chocolateBars = [ 'snickers', 'hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (array, element){
  return array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array[0] = element
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
}


