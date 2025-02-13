import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { name, username, password } = formData;
      if (!name || !username || !password) {
        throw new Error("All fields are required");
      }

      // Create account logic here (e.g., API call)
      console.log("Account created successfully");

      setIsCardVisible(true);
    } catch (err) {
      setError(err.message || "An error occurred while creating your account.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      username: "",
      password: "",
    });
    setIsCardVisible(false);
  };

  const loginCardStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={loginCardStyle}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
      {isCardVisible && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>Account Created Successfully!</h3>
          <p>You can now log in with your new account.</p>
          <button onClick={resetForm} style={{...buttonStyle, marginTop: '10px'}}>
            Create Another Account
          </button>
        </div>
      )}
    </div>
  );
}

export default SignUp;