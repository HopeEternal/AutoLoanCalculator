//imports
import './styles/main.scss';

//Event Listeners
document.getElementById('inputForm').addEventListener('input', function(){setVariables()});
document.getElementById('btnCalculate').addEventListener('click', function(){generateSchedule()});

//vars
function setVariables() {
    const form = document.getElementById("inputForm");
        let carPrice = parseInt(form.elements["carPrice"].value);
        let downPayment = parseInt(form.elements["downPayment"].value);
        let loanYears = parseInt(form.elements["years"].value);
        let loanMonths = parseInt(form.elements["months"].value);
        let interestRate = parseInt(form.elements["interestRate"].value);

        const monthlyOutput = document.getElementById("monthlyOutput");
        const interestOutput = document.getElementById("interestOutput");

        updateOutput();
}

//Form 
function updateOutput() {

    //Get HTML Elements
    

    //Calculate
    /* Monthly Payment Formula:
        monthlyPayment = carPrice - downPayment * 
        (interest per month [(1 + interest per month) * months] /
        (1 + interest per month) ^ months - 1
    */

    //Convert years to months to perform all future calculations based on months
    let loanDuration = parseFloat((loanYears * 12) + loanMonths);     
    
    //Calculate Monthly Payment
    let intRatePerMonth = (interestRate / 1200);
    let monthlyPayment = ((intRatePerMonth + (intRatePerMonth / (Math.pow((1 + intRatePerMonth), loanDuration) -1))) * (carPrice - (downPayment || 0))).toFixed(2);
    
    //Calculate Total Interest Paid
    
    /* Total Interest Paid Formula
        interest = (interest rate/number of payments) * loan principal
    */
   let totalinterestPaid = (interestRate / 1200) * (carPrice - downPayment);

   //Output to UI
    monthlyOutput.value = monthlyPayment;
    interestOutput.value = totalinterestPaid;
}


// Amortization schedule
function generateSchedule() {
    if (monthlyOutput = 0) {
        alert('Please complete the form first!');

    } else {
        const form = document.getElementById("inputForm");
        let carPrice = parseInt(form.elements["carPrice"].value);
        let downPayment = parseInt(form.elements["downPayment"].value);
        let loanYears = parseInt(form.elements["years"].value);
        let loanMonths = parseInt(form.elements["months"].value);
        let interestRate = parseInt(form.elements["interestRate"].value);

        let loanDuration = parseFloat((loanYears * 12) + loanMonths);           
        let intRatePerMonth = (interestRate / 100) / 12;

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



        // Generate table body
        for ( let i = 0; i < loanDuration; i++ ) {
            let row = document.createElement("tr");
            
            for ( let j = 0; j < 6; j++ ) {
                let cell = document.createElement("td");
                let cellContent = document.createTextNode("content");
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
