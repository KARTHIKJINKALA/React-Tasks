Controlled Components:

steps:
1.Implement the forms in the component using jsx syntax
2.Take the state for the inputs (individual states or single state)
3.Attach the states to the input tag using value attributes
4.For field validations ,we will add onChange attribute for each inputs(onChange will accept the function whwere we can track the input)
5.Within the function,To collect the values from input we use event.target.value

6.Validate the user, 
if validation fails- Invalid creds
else validation passes- Valid creds,submit the form

7.We will post the data to the server using post api call

8.if user exists,allow the user(details of user,invalid creds)