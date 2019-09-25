//imports
import './styles/main.scss';

//Event Listeners
document.getElementById('inputForm').addEventListener('input', function(){setVariables()});
document.getElementById('btnCalculate').addEventListener('click', function(){generateSchedule()});

//Variables
const form = document.getElementById("inputForm");
const monthlyOutput = document.getElementById("monthlyOutput");
const interestOutput = document.getElementById("interestOutput");

function setVariables() {
    let formData = {
        carPrice: parseInt(form.elements["carPrice"].value),
        downPayment: parseInt(form.elements["downPayment"].value),
        loanYears: parseInt(form.elements["years"].value),
        loanMonths: parseInt(form.elements["months"].value),
        interestRate: parseInt(form.elements["interestRate"].value),
        monthlyPayment: 0,
        loanDuration: 0,
        intRatePerMonth: 0,
        totalinterestPaid: 0
    }
    updateOutput(formData);
    return formData;
}

//Form 
function updateOutput(formData) {

    //Calculate
    /* Monthly Payment Formula:
        monthlyPayment = carPrice - downPayment * 
        (interest per month [(1 + interest per month) * months] /
        (1 + interest per month) ^ months - 1
    */

    //Convert years to months to perform all future calculations based on months
    formData.loanDuration = (formData.loanYears * 12) + formData.loanMonths;     
    
    //Calculate Monthly Payment
    formData.intRatePerMonth = (formData.interestRate / 1200);
    formData.monthlyPayment = ((formData.intRatePerMonth + (formData.intRatePerMonth / (Math.pow((1 + formData.intRatePerMonth), formData.loanDuration) -1))) * (formData.carPrice - (formData.downPayment || 0))).toFixed(2);
    
    //Calculate Total Interest Paid
    /* Total Interest Paid Formula
        interest = (interest rate/number of payments) * loan principal
    */
    formData.totalinterestPaid = (formData.interestRate / 1200) * (formData.carPrice - formData.downPayment);

   //Output to UI
    monthlyOutput.value = formData.monthlyPayment;
    interestOutput.value = formData.totalinterestPaid;
}


// Amortization schedule
function generateSchedule() {
    let formData = setVariables();
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

        // Calculations

        // Generate table body
        for ( let i = 0; i < formData.loanDuration; i++ ) {
            let row = document.createElement("tr");
            
            for ( let j = 0; j < 6; j++ ) {
                let cell = document.createElement("td");
                let cellContent = document.createTextNode(formData.monthlyPayment);
                cell.appendChild(cellContent);
                row.appendChild(cell);
            }

            tableBody.appendChild(row);
        }

        table.appendChild(tableBody);
        tableLocation.appendChild(table);
        table.setAttribute("border", "2");
    }
}
