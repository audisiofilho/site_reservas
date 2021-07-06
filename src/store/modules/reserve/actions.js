export function addReverveRequest(id){
    return {
        type: "ADD_RESERVE_REQUEST",
        id
      }
}
export function addReverveSuccess(trip){
    return {
        type: "ADD_RESERVE_SUCCESS",
        trip
      }
}

export function removeReserve(id){
    return {
        type: 'REMOVE_RESERVE',
        id,
      }
}

export function updateAmountReserve(id, amount){
  return{
    type: "UPDATE_RESERVE",
    id,
    amount
  }
}