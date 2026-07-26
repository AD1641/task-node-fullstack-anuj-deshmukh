import { useEffect, useMemo, useState } from 'react'

function ApplianceList() {
  const [appliances, setAppliances] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [sortBy, setSortBy] = useState('name')


  const [name, setName] = useState('')
  const [type, setType] = useState('Lightbulb')

  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetchAppliances()
  }, [])

  const fetchAppliances = async () => {
    try {
      setLoading(true)

      const res = await fetch(API_URL)

      if (!res.ok) {
        throw new Error('Failed to fetch appliances')
      }

      const data = await res.json()
      setAppliances(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // CREATE appliance
  const createAppliance = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, type }),
      })

      if (!res.ok) {
        throw new Error('Failed to create appliance')
      }

      const newAppliance = await res.json()

      setAppliances((prev) => [...prev, newAppliance])

      setName('')
      setType('Lightbulb')
    } catch (err) {
      alert(err.message)
    }
  }

  // DELETE appliance
  const deleteAppliance = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })

      if (!res.ok) {
        throw new Error('Failed to delete appliance')
      }

      setAppliances((prev) =>
        prev.filter((a) => a.id !== id)
      )
    } catch (err) {
      alert(err.message)
    }
  }

  // REBOOT appliance
  const rebootAppliance = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/${id}/reboot`,
        {
          method: 'POST',
        }
      )

      const data = await res.json()

      alert(data.message)
    } catch (err) {
      alert('Failed to reboot appliance')
    }
  }

  // SORTING
  const sortedAppliances = useMemo(() => {
    const sorted = [...appliances]

    sorted.sort((a, b) => {
      if (sortBy === 'createdAt') {
        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        )
      }

      return a[sortBy].localeCompare(b[sortBy])
    })

    return sorted
  }, [appliances, sortBy])

  if (loading) return <p>Loading appliances...</p>
  if (error) return <p>{error}</p>

  return (
    <div>

      {/* CREATE FORM */}
      <form onSubmit={createAppliance} className="form">
        <h3>Add Appliance</h3>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Lightbulb">Lightbulb</option>
          <option value="Set top box">Set top box</option>
          <option value="Smoke detector">
            Smoke detector
          </option>
        </select>

        <button type="submit">Create</button>
      </form>

      {/* SORT */}
      <div className="toolbar">
        <label>Sort by:</label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="type">Type</option>
          <option value="createdAt">
            Created date
          </option>
        </select>
      </div>

      {/* LIST */}
      <div className="grid">
        {sortedAppliances.map((a) => (
          <div key={a.id} className="card">
            <h3>{a.name}</h3>

            <p>Type: {a.type}</p>
            <p>ID: {a.id}</p>

            <p>
              Created:{' '}
              {new Date(
                a.createdAt
              ).toLocaleDateString()}
            </p>

            <div className="actions">
              <button
                onClick={() => rebootAppliance(a.id)}
              >
                Reboot
              </button>

              <button
                onClick={() => deleteAppliance(a.id)}
                className="danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h1>Appliances</h1>
      <ApplianceList />
    </div>
  )
}

export default App