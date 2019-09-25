import './styles/main.scss';

document.getElementById('inputForm').addEventListener('input', function(){inputValidation();updateOutput();});
document.getElementById('btnCalculate').addEventListener('click', function(){
    (monthlyOutput.value>0)?generateSchedule():alert('Please complete the form first!');
});

const form = document.getElementById("inputForm");
const monthlyOutput = document.getElementById("monthlyOutput");
const interestOutput = document.getElementById("interestOutput");

function updateOutput() {

    let carPrice = parseFloat(form.elements["carPrice"].value);
    let downPayment = parseFloat(form.elements["downPayment"].value);
    let loanYears = parseFloat(form.elements["years"].value);
    let loanMonths = parseFloat(form.elements["months"].value);
    let interestRate = parseFloat(form.elements["interestRate"].value);

    // Amortization table content
    let rowContent = [];
    
    // Calculations for monthly payment
    let loanDuration = (loanYears * 12) + loanMonths;
    let intRatePerMonth = interestRate / 1200;
    let initialInterestPaid = (interestRate / 1200) * (carPrice - downPayment);

    let monthlyPayment = (intRatePerMonth + (intRatePerMonth / (Math.pow((1 + intRatePerMonth), loanDuration) - 1))) * (carPrice - downPayment);

    // Calculations for amortization table
    let balance = carPrice - downPayment;
    let totalInterestPaid = initialInterestPaid;
    let interest = initialInterestPaid;

    for ( let i = 0; i < loanDuration; i++ ) {

        balance = balance - monthlyPayment + interest;
        if (balance < 0) {
            balance = 0;
        }
        rowContent[i] = [ i+1, "$"+monthlyPayment.toFixed(2), "$"+(monthlyPayment - interest).toFixed(2), "$"+(interest).toFixed(2), "$"+totalInterestPaid.toFixed(2), "$"+balance.toFixed(2) ];

        interest = intRatePerMonth * balance;
        totalInterestPaid += interest;
    }

    // Output to UI
    if ( monthlyPayment >= 0 && isFinite(monthlyPayment) ) {
        monthlyOutput.value = monthlyPayment.toFixed(2);
        interestOutput.value = totalInterestPaid.toFixed(2);
    }

    return rowContent; // pass table content to generateSchedule()
}

// Amortization schedule
function generateSchedule() {
        
    //Generate Table
    let tableLocation = document.getElementsByClassName("amortization")[0];

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    // Add titles for each column
    let columnTitle = document.createElement("tr");
    let titles= ["Payment #", "Payment Amount", "Principal Paid","Interest Paid","Total Interest","Balance"];
    for ( let j = 0; j < 6; j++ ) {
        let tableHeaders = document.createElement("th");
    
        let title = document.createTextNode(titles[j]);
        tableHeaders.appendChild(title);
        columnTitle.appendChild(tableHeaders);
    }
    table.appendChild(columnTitle);

    let duration = parseInt(form.elements["years"].value) * 12 + parseInt(form.elements["months"].value);
    let rowContent = updateOutput();
    
    // Generate table body
    for ( let i = 0; i < duration; i++ ) {
        let row = document.createElement("tr");

        for ( let j = 0; j < 6; j++ ) {
            let cell = document.createElement("td");
            let cellContent = document.createTextNode(rowContent[i][j]);
            cell.appendChild(cellContent);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    tableLocation.innerHTML = ""; // Clear any previous table
    tableLocation.appendChild(table);
    table.setAttribute("border", "2");
}

// Check if all inputs are valid
function inputValidation() {

    let moneyInput = document.getElementsByClassName("moneyInput");
    let dateInput = document.getElementsByClassName("dateInput");

    for ( let i = 0; i < moneyInput.length; i++ ) {
        moneyInput[i].onkeydown = function(e) {
            if(!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58) 
            || e.keyCode == 8 
            || e.keyCode == 9
            || e.keyCode == 190)) {
                return false;
            }
        }
    }

    for ( let i = 0; i < dateInput.length; i++ ) {
        dateInput[i].onkeydown = function(e) {
            if(!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58) 
            || e.keyCode == 8 
            || e.keyCode == 9)) {
                return false;
            }
        }
    }
}
