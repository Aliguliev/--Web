let group_number = document.getElementById('number_group')
const input_group_number_btn = document.getElementById('input_group_btn')
const input_group_cont = document.getElementById('input_group')
const main_con = document.getElementById('main')
const user_groupText =  document.getElementById('user_group')
let group_number_active;
const saveGroup =()=>{
    
    group_number_active=group_number.value;
    input_group_cont.style.display = 'none';
    main_con.style.display = 'block';
    user_groupText.innerHTML = `Группы: ${group_number_active}`
}

input_group_number_btn.addEventListener('click',saveGroup)
