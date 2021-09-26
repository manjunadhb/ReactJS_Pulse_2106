let url = "https://pulse.brninfotech.com/pulse/modules/admin/ValidateLogin.php";
let jsonData;
const validateLoginService = async (user, password) => {
    console.log(user);
    console.log(password);

    let formData = new FormData();
    formData.append("registeredEmail", user);
    formData.append("registeredPassword", password);
    formData.append("funcName", "verifyLogin");

    console.log(formData);
    let response = await fetch(url, { method: "POST", body: formData });
    console.log(response);
    jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
}

const json = () => {
    console.log("inside the json");
    return jsonData;
}



export default validateLoginService;
export { json };