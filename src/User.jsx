function Users() {
  const names = [
    { name: 'ali', age: 19 },
    { name: 'reza', age: 36 },
    { name: 'mmd', age: 45 },
  ]

  return (
    <div>
      {names.map((user, index) => {
        return <h2 key={index}>{user.name} : {user.age}</h2>
      })}
    </div>
  )
}

export default Users