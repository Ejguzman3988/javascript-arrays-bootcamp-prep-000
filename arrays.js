chocolateBars = [ 'snickers', 'hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (array, element){
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array[0] = element
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

