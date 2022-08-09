function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const context = React.useContext(UserContext);  
  
    function validate(field, label){
        let isValid = true;
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
        if (label == 'email'){
          isValid = String(field).toLowerCase().match(
            /\S+@\S+\.\S+/
          );
          setStatus(isValid ? '' : 'Email is not valid');
        }
        if (label == 'password'){
          isValid = field.length >= 6;
          setStatus(isValid ? '': 'Password must be 6 characters');
        }
        if (label == 'name')
        {
          isValid = field.length >= 2;
          setStatus(isValid ? '': 'Name is invalid');
        }
        if (!isValid){
          console.log(status);
          return false;
        }
        else {
          return true;
        }
    }
  
    function handleCreate(){
      console.log(name, email, password);
      if (!validate(name, 'name'))     return;
      if (!validate(email, 'email'))    return;
      if (!validate(password, 'password')) return;
      context.users.push({name, email, password, balance:100});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="light"
        txtcolor="black"
        header="Create Account"
        status={status}
        body={show ? (  
            <>
            Name: <br/>
            <input type="input" className="form-control" id="name" placeholder="ex: Bruce Wayne" value={name} onChange={e => setName(e.currentTarget.value)} /> <br/>
            Email address: <br/>
            <input type="input" className="form-control" id="email" placeholder="ex: bruce@batman.com" value={email} onChange={e => setEmail(e.currentTarget.value)}/> <br/>
            Password: <br/>
            <input type="password" className="form-control" id="password" placeholder="enter password here" value={password} onChange={e => setPassword(e.currentTarget.value)}/> <br/>
            <button type="submit" disabled={ (name && email && password) ?false:true} className="btn btn-dark" onClick={handleCreate}>Submit</button>
            </>
            ):(
            <>
            <h5>Success!</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>Add another account?</button>
            </>
            )}
      />
    );
  }