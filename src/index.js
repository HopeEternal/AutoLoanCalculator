//imports
import './styles/main.scss';

document.getElementById('inputForm').addEventListener('input', function(){updateOutput()});

//Form 
function updateOutput() {
    //Get HTML Elements
    const form = document.getElementById("inputForm");
    let carPrice = parseInt(form.elements["carPrice"].value);
    let downPayment = parseInt(form.elements["downPayment"].value);
    let loanYears = parseInt(form.elements["years"].value);
    let loanMonths = parseInt(form.elements["months"].value);
    let interestRate = parseInt(form.elements["interestRate"].value);

    const monthlyOutput = document.getElementById("monthlyOutput");
    const interestOutput = document.getElementById("interestOutput");

    //Calculate
    /* Monthly Payment Formula:
        monthlyPayment = carPrice - downPayment 
        * 
        (interest per month [(1 + interest per month) * months]
        / 
        (1 + interest per month) ^ months - 1
    */

    //Convert years to months to perform all future calculations based on months
    let loanDuration = parseFloat((loanYears * 12) + loanMonths);           
    let intRatePerMonth = (interestRate / 100) / 12;
    let monthlyPayment = ((intRatePerMonth + (intRatePerMonth / (Math.pow((1 + intRatePerMonth), loanDuration) -1))) * (carPrice - (downPayment || 0))).toFixed(2);
    let totalinterestPaid = 2;


    monthlyOutput.value = monthlyPayment;
    interestOutput.value = totalinterestPaid;
}