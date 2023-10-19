// Write your solution in this file!
const employee = {
    name : "lmao",
    streetAddress : "idk"

};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee, "name" : "Sam", "streetAddress": "11 Broadway"}
    return newObj
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
};

function deleteFromEmployeeByKey(employee, key){
    const newObj_2 = {...employee[key]}
    delete newObj_2[key]
    return newObj_2
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
};