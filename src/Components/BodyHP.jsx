import axios from 'axios';
import { Component } from 'react';
import './BodyHp.css';

const apiUrl = 'https://www.reddit.com/r/Eyebleach.json';
class BodyHP extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
    this.getReddit = this.getReddit.bind(this);
  }

  componentDidMount() {
    this.getReddit();
  }

  getReddit() {
    axios.get(`${apiUrl}`).then((res) => {
      const posts = res.data.data.children.map((obj) => obj.data);
      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map((post) => (
          <figure className="DisplayPost">
            <img
              className="ImagePost"
              src={post.url_overridden_by_dest}
              alt={post.title}
            />
            <figcaption>
              <h2 className="TitleStyle">{post.title}</h2>
              <p className="AuthorStyle">{post.author_fullname}</p>
            </figcaption>
          </figure>
        ))}
        ;
      </div>
    );
  }
}

export default BodyHP;

// <li key={post.id}>{post.title}</li>