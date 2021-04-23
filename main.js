// GET REQUEST
/** WAY ONE */
function getTodos() {
    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
            timeout: 5000
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
}

/** WAY TWO */
async function getTodos() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', { timeout: 5000})
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}


// POST REQUEST

/** WAY ONE */
function addTodo() {
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'New Todo',
            completed: false
          }
    })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }

/** WAY TWO */
function addTodo() {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: 'New Todo',
        completed: false
      })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  

  // PUT/PATCH REQUEST
  function updateTodo() {
    axios
      .patch('https://jsonplaceholder.typicode.com/todos/1', {
        title: 'Updated Todo',
        completed: true
      })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios
      .delete('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }

  // CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  };

  axios
    .post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: 'New Todo',
        completed: false
      },
      config
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}



// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('headers').addEventListener('click', customHeaders);