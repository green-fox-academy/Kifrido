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