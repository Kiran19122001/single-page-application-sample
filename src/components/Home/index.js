import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="home-cont">
      <div className="profile-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="profile-pic"
        />
        <h1>Wade Warren</h1>
        <p>Software Developer at UK</p>
      </div>
      <div>
        <ul>
          {blogsList.map(each => (
            <li className="list-of-items" key={each.id}>
              <div className="first-line">
                <h1 className="title">{each.title}</h1>
                <p className="date">{each.publishedDate}</p>
              </div>
              <p className="description">{each.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Home
