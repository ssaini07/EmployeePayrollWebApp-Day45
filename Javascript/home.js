//Whenever our file gets loaded this window function will be called.
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

//Template literal 
const createInnerHTML = () => {
    const headerHtml = `<tr>
    <th>Profile</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>`;
    const innerHtml = `${headerHtml}

<tr>
    <td><img class="profile" alt="profileImage" src="../Assets/assets/profile-images/Ellipse -2.png"></td>
    <td>Shubham Saini</td>
    <td>Male</td>
    <td>
        <div class="dept-label">HR</div>
        <div class="dept-label">Engineer</div>
    </td>
    <td>400000</td>
    <td>25 Mar 2021</td>
    <td>
        <img alt="delete" src="../Assets/assets/icons/delete-black-18dp.svg">
        <img alt="update" src="../Assets/assets/icons/create-black-18dp.svg">
    </td>
</tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}