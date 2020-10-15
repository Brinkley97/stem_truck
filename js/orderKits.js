// alert("I'm working");
function incrementChemistry()
{
    var value = parseInt(document.getElementById('chemNumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('chemNumber').value = value;
}
function incrementElectronics()
{
    var value = parseInt(document.getElementById('elecNumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('elecNumber').value = value;
}
function incrementEngineering()
{
    var value = parseInt(document.getElementById('engiNumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('engiNumber').value = value;
}
