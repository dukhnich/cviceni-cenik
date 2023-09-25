const selectPlan = (planNumber) => {
    document.querySelector('#plan1').classList.remove('plan--selected');
    document.querySelector('#plan2').classList.remove('plan--selected');
    document.querySelector('#plan3').classList.remove('plan--selected');
    const el = document.querySelector(`#plan${planNumber}`);
    if (el && !el.classList.contains('plan--selected')) {
        el.classList.add('plan--selected');
    }
}
selectPlan(2)
selectPlan(3)