function calculateNetSalary(basicSalary, benefits){
    
    //calculate PAYE tax based on conditions from the KRA assuming benefits are not viable for tax deductions
    let paye;
    if (basicSalary<=24000){
        paye = basicSalary*0.1;
    }else if(basicSalary>24000 && basicSalary<=32333){
        paye = basicSalary*0.25;
    }else if(basicSalary>32333 && basicSalary<=500000){
        paye = basicSalary*0.3;       
    }else if(basicSalary>500000 && basicSalary<=800000){
        paye = basicSalary*0.325;
    }else{
        paye = basicSalary*0.35;
    }
    // Calculates  NHIF  Deductions based on  NHIF rates
    let nhifRates;
    if (basicSalary<=5999){
        nhifRates = 150;
    }else if(basicSalary>5999 && basicSalary<=7999){
        nhifRates = 300;
    }else if(basicSalary>7999 && basicSalary<=11999){
        nhifRates =400;
    }else if(basicSalary>11999 && basicSalary<=14999){
        nhifRates =500;
    }else if(basicSalary>14999 && basicSalary<=19999){
        nhifRates =600;
    }else if(basicSalary>19999 && basicSalary<=24999){
        nhifRates =750;
    }else if(basicSalary>24999 && basicSalary<=29999){
        nhifRates =850;
    }else if(basicSalary>29999 && basicSalary<=34999){
        nhifRates =900;
    }else if(basicSalary>34999 && basicSalary<=39999){
        nhifRates =950;
    }else if(basicSalary>39999 && basicSalary<=44999){
        nhifRates =1000;
    }else if(basicSalary>44999 && basicSalary<=49999){
        nhifRates =1100;
    }else if(basicSalary>49999 && basicSalary<=59999){
        nhifRates =1200;
    }else if(basicSalary>59999 && basicSalary<=69999){
        nhifRates =1300;
    }else if(basicSalary>69999 && basicSalary<=79999){
        nhifRates =1400;
    }else if(basicSalary>79999 && basicSalary<=89999){
        nhifRates =1500;
    }else if(basicSalary>89999 && basicSalary<=99999){
        nhifRates =1600;
    }else{
        nhifRates =1700;
    }
//Calculate NSSF deductions using the latest rates of 6%
    const nssfDeductions = basicSalary*0.06;
// Calculate Gross salary 
    const grossSalary = basicSalary+benefits;
//calculate net salary
    const netSalary = basicSalary-paye-nhifRates-nssfDeductions;

  // Output the results
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`Payee (Tax): ${paye}`);
  console.log(`NHIF Deductions: ${nhifRates}`);
  console.log(`NSSF Deductions: ${nssfDeductions}`);
  console.log(`Net Salary: ${netSalary}`);
}
const basicSalary = 50000;
const benefits = 10000;

calculateNetSalary(basicSalary, benefits);