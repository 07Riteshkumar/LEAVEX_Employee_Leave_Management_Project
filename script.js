function applyLeave() {

    let employeeName = prompt("Enter Employee Name:");

    if (employeeName === null || employeeName.trim() === "") {
        alert("Employee name cannot be empty!");
        return;
    }

    let employeeId = prompt("Enter Employee ID:");

    if (employeeId === null || employeeId.trim() === "") {
        alert("Employee ID cannot be empty!");
        return;
    }

    let department = prompt("Enter Department:");

    if (department === null || department.trim() === "") {
        alert("Department cannot be empty!");
        return;
    }

    let leaveChoice = prompt(
        "Select Leave Type:\n" +
        "1. Casual Leave\n" +
        "2. Sick Leave\n" +
        "3. Personal Leave"
    );

    if (leaveChoice === null || leaveChoice.trim() === "") {
        alert("Please select a leave type!");
        return;
    }

    let leaveType;

    if (leaveChoice.trim() === "1") {
        leaveType = "Casual Leave";
    }
    else if (leaveChoice.trim() === "2") {
        leaveType = "Sick Leave";
    }
    else if (leaveChoice.trim() === "3") {
        leaveType = "Personal Leave";
    }
    else {
        alert("Invalid Leave Type! Please select 1, 2 or 3.");
        return;
    }

    let leaveDays = prompt("Enter Number of Leave Days:");

    if (leaveDays === null || leaveDays.trim() === "") {
        alert("Leave days cannot be empty!");
        return;
    }

    leaveDays = Number(leaveDays);

    if (isNaN(leaveDays) || leaveDays <= 0 || !Number.isInteger(leaveDays)) {
        alert("Please enter a valid number of leave days!");
        return;
    }

    alert(
        "Employee Leave Details\n\n" +
        "Employee Name: " + employeeName + "\n" +
        "Employee ID: " + employeeId + "\n" +
        "Department: " + department + "\n" +
        "Leave Type: " + leaveType + "\n" +
        "Leave Days: " + leaveDays
    );

    let submitRequest = confirm(
        "Do you want to submit your leave request?"
    );

    if (submitRequest) {

        let managerApproval = confirm(
            "Manager Approval\n\n" +
            "Employee Name: " + employeeName + "\n" +
            "Employee ID: " + employeeId + "\n" +
            "Department: " + department + "\n" +
            "Leave Type: " + leaveType + "\n" +
            "Leave Days: " + leaveDays + "\n\n" +
            "Do you approve this leave request?"
        );

        if (managerApproval) {

            document.getElementById("result").innerHTML =
                "<strong>Leave Request Approved!</strong><br><br>" +
                "Employee Name: " + employeeName + "<br>" +
                "Employee ID: " + employeeId + "<br>" +
                "Department: " + department + "<br>" +
                "Leave Type: " + leaveType + "<br>" +
                "Leave Days: " + leaveDays + "<br>" +
                "<strong>Status: Approved</strong>";

            alert("Congratulations! Your leave request has been approved.");

            console.log("Employee Leave Details");
            console.log("Employee Name: " + employeeName);
            console.log("Employee ID: " + employeeId);
            console.log("Department: " + department);
            console.log("Leave Type: " + leaveType);
            console.log("Leave Days: " + leaveDays);
            console.log("Status: Approved");

        }
        else {

            document.getElementById("result").textContent =
                "Your leave request has been rejected by the manager.";

            alert("Sorry! Your leave request has been rejected.");
        }

    }
    else {

        document.getElementById("result").textContent =
            "You have cancelled your leave request.";

        alert("Leave request cancelled successfully.");
    }
}