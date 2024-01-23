/* Your Code Here */

function createEmployeeRecord(employeeArray) {
    return {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3]
     
    };
  }
  
  
  const employeeData= {
    firstName : "Gray",
    familyName : "Worm",
    title: "Security",
    payPerHour : 1,
    timeInEvents : [],
    timeOutEvents : []
   
}

  const employeeRecord = createEmployeeRecord(employeeData);
  
  console.log(employeeRecord);
  
  function createEmployeeRecords(arrayOfEmployeeData) {
    return arrayOfEmployeeData.map(createEmployeeRecord);
   
  }
  
  const arrayOfEmployeeData = [
    {
      firstName: "Gray",
      familyName: "Worm",
      title: "Security",
      payPerHour: 1,
      timeInEvents : [],
      timeOutEvents : [],
      salary:''
    },
    
  ];
  
  const arrayOfEmployeeRecords = this.createEmployeeRecords.arrayOfEmployeeData;
  
  console.log(arrayOfEmployeeRecords);



 
let timeEvents=[];
function createTimeInEvent (dateStamp){
  const dateTime = new Date(dateStamp);
  const hour = dateTime.getHours
  const date = `${dateTime.getFullYear()}-${(dateTime.getMonth() + 1).toString().padStart(2, '0')}-${dateTime.getDate().toString().padStart(2, '0')}`;

    const timeInEvent = {
      type:"TimeIn",
      hours:"hour",
      date:"date"
    }
    timeEvents.push(timeInEvent);
    return timeInEvent;
}

// let timeEvents=[];
function createTimeOutEvent (dateStamp){
  const dateTime = new Date(dateStamp);
  const hour = dateTime.getHours
  const date = `${dateTime.getFullYear()}-${(dateTime.getMonth() + 1).toString().padStart(2, '0')}-${dateTime.getDate().toString().padStart(2, '0')}`;

    const timeOutEvent = {
      type:"TimeOut",
      hours:"hour",
      date:"date"
    }
    timeEvents.push(timeOutEvent);
    return timeOutEvent;
}

function hoursWorkedOnDate(date){
  const filteredEvents = timeEvents.filter(event => event.date === date);

  if (filteredEvents.length === 0) {
    return 0; 
  }

  
  const timeInHour = filteredEvents[0].hour;
  const timeOutHour = filteredEvents[filteredEvents.length - 1].hour;

  return timeOutHour - timeInHour;

}
function wagesEarnedOnDate (date){

}

  function findEmployeeByFirstName(srcArray, firstName) {
    // Use Array.find to search for a matching record
    const matchingRecord = srcArray.find(record => record.firstName === firstName);
  
    // Return the matching record or undefined if no match is found
    return matchingRecord;
  }
function calculatePayroll(Array){

}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

