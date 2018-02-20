// Given an 3d array, array of arrays of arrays:

const schedules = 
[
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']], // 1st persons meetings
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']], // 2nd persons meetings
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']] // 3rd persons meetings
]

// Where the second layer of arrays are meetings a person has, 
// and each element in that array is a time of a meeting during the day
// for example, the first persons first meeting goes from 9:00  - 11:30
// the second persons first meeting goes from 9:15  - 12:00 

// The times are in a 24 Hour time which means 11:59PM is 23:59
// Each person begins the day no earlier than 9:00 and ends at 19:00

// Your task is to solve for the earliest time that all 3 can be in a meeting that
// can last for the amount, duration, given where it does not overlap their current meetings
// duration is given as a string in minutes

// If no meeting is possible, return null.

// Example 1 - 
// scheduleMeetings(schedules, "60") => "12:15"

// Example 2 -
// scheduleMeetings(schedules, "90") => null

function scheduleMeetings(schedules, duration) {
}

module.exports = {scheduleMeetings, schedules};