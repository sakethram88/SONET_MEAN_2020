let sArray = [];
function pushData(form, event) {
  event.preventDefault();
  var sObject = {name: form.name.value, email: form.email.value, section: form.section.value, number: form.number.value};
  sArray.push(sObject);
  showData();
  clearForm(form);
}

function showData() {
  let targetBody = document.querySelector("tbody");
  targetBody.innerHTML = '';
  sArray.forEach((student) => {
    targetBody.innerHTML += `
             <tr>
                <td>
                    ${student.name}
                </td>
                <td>
                    ${student.email}
                </td>
                <td>
                    ${student.section}
                </td>
                <td>
                    ${student.number}
                </td>
            </tr>
      `;
  });
}

function clearForm(form) {
  form.name.value = "";
  form.email.value = "";
  form.section.value = "";
  form.number.value = "";
}