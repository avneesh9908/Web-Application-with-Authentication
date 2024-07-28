import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "", // Change 'username' to 'email' to match the input field name
    password: "",
  });

  const navigate = useNavigate();

  
  // Handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };


  // Define the handleSubmit function
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
  });
  if (response.ok) {
    // const responseData = await response.json();
    // console.log("after login: ", responseData);
    // // toast.success("Registration Successful");
    // saveTokenInLocalStr(responseData.token);
    navigate("/");
  }
} catch (error) {
  console.log(error);
}
};


  return (
    <>
 <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login NOw
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};