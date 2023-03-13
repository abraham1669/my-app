const Form = () => {
  return (
    <form action='#'>
      <input placeholder='Name' type='text' id='names' name='names' />
      <input placeholder='Email' type='email' id='email' name='email' />
      <textarea placeholder='Type your message here' name='comment' id='comment' />
      <button>Submit</button>
    </form>
  )
}

export default Form
