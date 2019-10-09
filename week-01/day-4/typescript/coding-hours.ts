'use strict';

let weeklyCode: number = (6 * 5);
let semesterCode: number = ((6 * 5) * 17);
console.log (semesterCode);

const weeksInSemester: number = 17;
const workHoursWeekly: number = 52;
const workHoursDaily: number = 52 / 5;
const codeHoursDaily: number = 6;
const workDaysPerWeek: number = 5;
const codeHoursSemester: number = (workDaysPerWeek * codeHoursDaily) * weeksInSemester
const workHoursSemester: number = weeksInSemester * workHoursWeekly
console.log ((codeHoursSemester / workHoursSemester) * 100);

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

/*let dailyCodinginHours: number = 6;
let semesterInWeeks: number = 17;
let daysInaWeek: number = 5;
let weeklyCode: number = dailyCodinginHours * daysInaWeek;
let semestercode: number = semesterInWeeks * weeklyCode;
console.log(semestercode);

let workHoursWeekly: number = 52;
let workHoursSemester: number = workHoursWeekly * semesterInWeeks;
let percentageOfCodingHours: number = semestercode / workHoursSemester;
console.log(percentageOfCodingHours * 100);*/
