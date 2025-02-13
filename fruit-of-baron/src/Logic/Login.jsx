import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isCardVisible, setIsCardVisible] = useState(false);



    /*The handleLogin function is:
    An asynchronous event handler (denoted by async).
    It handles form submission for user login, preventing the default form behavior and managing login logic 
    (e.g., error handling, clearing inputs, etc.).*/
    const handleLogin = async (e) => {
        e.preventDefault();
    /*e is the event object representing the form submission.
    e.preventDefault() prevents the default behavior of the form, which is to reload the page. 
    This is crucial for single-page applications (SPAs) like React apps, where page reloads are unnecessary.*/
    setError(null); // setError(null) resets the error state to null, ensuring that any old error messages are cleared before attempting a new login.

        try {   //The try-catch-finally block is used to handle asynchronous login logic and potential errors.
           
             // Here you would typically make an API call to authenticate the user
            // For demonstration, we're using a timeout to simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Simulating a successful login
            console.log("Login successful");
            setIsCardVisible(false);
        } catch (err) {
            setError("Invalid username or password");
        } finally {
            setUsername("");
            setPassword("");
        }
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
        <div>
            <button onClick={() => setIsCardVisible(true)}>Log In</button>
            
            {isCardVisible && (
                <div style={loginCardStyle}>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={inputStyle}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                            required
                        />
                        <button type="submit" style={buttonStyle}>Login</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button onClick={() => setIsCardVisible(false)} style={{ ...buttonStyle, marginTop: '10px', backgroundColor: '#e74c3c' }}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Login;