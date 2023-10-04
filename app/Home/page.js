import Layout from '../components/Layout'
import ListingFeed from '../components/ListingFeed/ListingFeed'
import carData from '../../data.json'

const HomePage = () => {
  const data = carData
  return (
    <Layout>
      <ListingFeed data={data} />
    </Layout>
  )
}

export default HomePage
