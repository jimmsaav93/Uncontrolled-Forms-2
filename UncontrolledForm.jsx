
function UncontrolledForm() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input name="username"></input>
      <input name="password" type="password"></input>
      <input name="remember" type="checkbox"></input>
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
export default UncontrolledForm;