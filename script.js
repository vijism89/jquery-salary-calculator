$ (document).ready (readyNow);

function readyNow ()
{
  //console.log ('JS');
  let el= $ ( '#inputContainer' );
  el.empty();
  el.append ('<input type="text" placeholder="First Name" id="firstName" >');
  el.append ('<input type="text" placeholder="Last Name" id="lastName" >');
  el.append ('<input type="text" placeholder="ID" id="idNumber" >');
  el.append ('<input type="text" placeholder="Title" id="jobTitle"  >');
  el.append ('<input type="number" placeholder="Annual Salary" id="annual" >');
  el.append ('<button id="final"> Submit </button>');
    $ ('#final').on ('click', addEmployee);
  let el1= $ ( '#tableContainer' );
    el1.empty();
    el1.append ('<h3> Employees </h3> ');
    el1.append ('<table id="employeeResult"> </table>')
    el1.append ('<h3 id="totalMonthlyOut" class="totalMClass">Total Monthly:<span id="totalValue"></span></h3>');
    let el2 = $ ('#employeeResult');
    el2.empty();
    el2.append ('<tr><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th></tr>');
   
}
let employees=[];
function addEmployee()
{
    if($.trim($ ('#firstName').val()) != '' && $.trim( $ ('#lastName').val()) != '' && $.trim( $('#idNumber').val()) != ''&& $.trim( $('#jobTitle').val()) != ''&& $.trim( $('#annual').val()) != '')
  {
    let employee = 
    {
        fname:$ ('#firstName').val(),
        lname:$ ('#lastName').val(),
        id:$('#idNumber').val(),
        titile:$('#jobTitle').val(),
        annualSalary:$('#annual').val()
    };

    employees.push (employee);
    let el2 = $ ('#employeeResult');
    el2.append ('<tr><td>'+employee.fname+'</td><td>'+employee.lname+'</td><td>'+employee.id+'</td><td>'+employee.titile+'</td><td>'+employee.annualSalary+'</td></tr>');
   $ ('#firstName').val('');
   $ ('#lastName').val('');
   $ ('#idNumber').val('');
   $ ('#jobTitle').val('');
   $ ('#annual').val('');
   $('#totalValue').empty();
   $('#totalValue').append('$'+calculateTotalMonthly());
  }
  
}

function calculateTotalMonthly()
{
    let totalAnnualMonthly=0;
    for (employee of employees)
    {
        totalAnnualMonthly+=+employee.annualSalary;
    }
    totalMonthly=(totalAnnualMonthly/12).toFixed(2);
    if(totalMonthly>20000)
    {
        $('#totalMonthlyOut').css('background-color', 'red');
    }
    return totalMonthly;
}