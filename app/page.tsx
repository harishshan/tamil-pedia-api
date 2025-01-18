export default async function Home() {
  const items= [
    { id: 1, name: 'Item One', description: 'This is item one' },
    { id: 2, name: 'Item Two', description: 'This is item two' },
    { id: 3, name: 'Item Three', description: 'This is item three' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
