const todos = [
    { name: 'bob', priority: "Defcon &#8545;" },
    { name: 'pam', priority: "Defcon &#8548;" },
    { name: 'sue', priority: "Defcon &#8544;" }
  ]
  
const sorted = todos.sort((a, b) => (a.priority < b.priority) ? 1 : -1)
  
  console.log(sorted)