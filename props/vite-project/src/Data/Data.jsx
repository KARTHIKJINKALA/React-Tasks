const Data = ({ user }) => {
    // Destructure the user object
    const { name= "balu", city, salary } = user || {};

    console.log(city); 

    return (
        <>
            <h1>Hello, this is the props page, {name}!</h1>
            <p>City: {city}</p>
            <p>Salary: {salary}</p>
        </>
    );
};

export default Data;
