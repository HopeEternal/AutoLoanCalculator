//imports
import './styles/main.scss';

//Event Listeners
document.getElementById('inputForm').addEventListener('input', function(){updateOutput()});
document.getElementById('btnCalculate').addEventListener('click', function(){generateSchedule()});

//Variables
const form = document.getElementById("inputForm");
const monthlyOutput = document.getElementById("monthlyOutput");
const interestOutput = document.getElementById("interestOutput");

function updateOutput() {
    let formData = {
        carPrice: parseFloat(form.elements["carPrice"].value),
        downPayment: parseFloat(form.elements["downPayment"].value),
        loanYears: parseFloat(form.elements["years"].value),
        loanMonths: parseFloat(form.elements["months"].value),
        interestRate: parseFloat(form.elements["interestRate"].value),
        calcMonthlyPayment: function () {
            return ((this.intRatePerMonth() + (this.intRatePerMonth() / (Math.pow((1 + this.intRatePerMonth()), this.calcLoanDuration()) - 1))) * (this.carPrice - (this.downPayment || 0))).toFixed(2);
        },
        calcLoanDuration: function () {
            return parseFloat((this.loanYears * 12) + this.loanMonths);
        },
        intRatePerMonth: function () {
            return parseFloat(formData.interestRate / 1200);
        },
        totalinterestPaid: 0
    }

    formData.monthlyPayment = ((formData.intRatePerMonth + (formData.intRatePerMonth / (Math.pow((1 + formData.intRatePerMonth), formData.calcLoanDuration()) - 1))) * (formData.carPrice - (formData.downPayment || 0))).toFixed(2);

    formData.totalinterestPaid = (parseFloat((formData.interestRate / 1200)) * parseFloat(formData.carPrice - formData.downPayment)).toFixed(2);

    //Output to UI
    monthlyOutput.value = formData.calcMonthlyPayment();
    interestOutput.value = formData.totalinterestPaid;

    return formData;
}

// Amortization schedule
function generateSchedule() {
    let formData = updateOutput();
    if (formData.monthlyPayment === "0.00") {
        alert('Please complete the form first!');

    } else {
        
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

        // Calculations for amortization table
        let balance = parseFloat(formData.carPrice - formData.downPayment);
        let totalInterestPaid = parseFloat(formData.totalinterestPaid);
        let interest = parseFloat(formData.totalinterestPaid);
        let rowContent = [];

        for ( let i = 0; i < formData.calcLoanDuration(); i++ ) {

            balance = balance - formData.calcMonthlyPayment() + interest;
            
            rowContent[i] = [ i+1, formData.calcMonthlyPayment(), (formData.calcMonthlyPayment() - interest).toFixed(2), (interest).toFixed(2), totalInterestPaid.toFixed(2), balance.toFixed(2) ];

            interest = parseFloat(formData.intRatePerMonth() * balance);
            totalInterestPaid += interest;
        }

        // Generate table body
        for ( let i = 0; i < formData.calcLoanDuration(); i++ ) {
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
        tableLocation.innerHTML = "";
        tableLocation.appendChild(table);
        table.setAttribute("border", "2");
    }
}
